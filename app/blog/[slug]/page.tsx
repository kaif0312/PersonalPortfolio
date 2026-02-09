import { notFound } from 'next/navigation';
import { getPostBySlug, getAllPostSlugs } from '@/lib/ghost';
import Image from 'next/image';
import { Calendar, Clock, ArrowLeft, User } from 'lucide-react';
import Link from 'next/link';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const slugs = await getAllPostSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  // Calculate reading time if not provided
  const readingTime = post.readingTime || Math.ceil(post.content.split(/\s+/).length / 200);
  const readingTimeText = `${readingTime} min read`;

  return (
    <article className="min-h-screen py-20">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Back Button */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-[#00ff88] transition-colors mb-8"
        >
          <ArrowLeft size={20} />
          <span>Back to Blog</span>
        </Link>

        {/* Header */}
        <header className="mb-12">
          {post.tags && post.tags.length > 0 && (
            <div className="mb-4 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full text-xs font-medium bg-[#00ff88]/20 text-[#00ff88]"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 md:gap-6 text-gray-400 text-sm mb-8">
            <div className="flex items-center gap-2">
              <Calendar size={16} />
              <span>
                {new Date(post.date).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} />
              <span>{readingTimeText}</span>
            </div>
            {post.author && (
              <div className="flex items-center gap-2">
                <User size={16} />
                <span>By {post.author.name}</span>
              </div>
            )}
          </div>

          {post.image && (
            <div className="relative w-full h-96 mb-8 rounded-lg overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}
        </header>

        {/* Content - Ghost returns HTML */}
        <div
          className="prose prose-invert prose-lg max-w-none blog-content"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Author Bio */}
        {post.author && post.author.bio && (
          <div className="mt-12 pt-8 border-t border-gray-800">
            <div className="flex items-start gap-4">
              {post.author.image && (
                <Image
                  src={post.author.image}
                  alt={post.author.name}
                  width={64}
                  height={64}
                  className="rounded-full"
                />
              )}
              <div>
                <h3 className="text-xl font-semibold mb-2">{post.author.name}</h3>
                {post.author.bio && (
                  <p className="text-gray-400">{post.author.bio}</p>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </article>
  );
}
