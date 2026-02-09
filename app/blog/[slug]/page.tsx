import { notFound } from 'next/navigation';
import { getPostBySlug, getAllPostSlugs } from '@/lib/posts';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Image from 'next/image';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { serialize } from 'next-mdx-remote/serialize';
import rehypeHighlight from 'rehype-highlight';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import Comments from '@/components/blog/Comments';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const posts = getAllPostSlugs();
  return posts.map((slug) => ({
    slug,
  }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  let mdxSource;
  try {
    mdxSource = await serialize(post.content, {
      mdxOptions: {
        rehypePlugins: [
          rehypeHighlight,
          rehypeSlug,
          [
            rehypeAutolinkHeadings,
            {
              behavior: 'wrap',
            },
          ],
        ],
      },
    });
  } catch (error) {
    // If MDX parsing fails, treat as plain markdown
    mdxSource = await serialize(post.content, {
      mdxOptions: {
        rehypePlugins: [rehypeHighlight, rehypeSlug],
      },
    });
  }

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
          <div className="mb-4">
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-[#00ff88]/20 text-[#00ff88]">
              {post.category}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            {post.title}
          </h1>

          <div className="flex items-center gap-6 text-gray-400 text-sm mb-8">
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
              <span>{post.readTime}</span>
            </div>
            {post.author && (
              <span>By {post.author}</span>
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

        {/* Content */}
        <div className="prose prose-invert prose-lg max-w-none">
          <MDXRemote
            source={mdxSource}
            components={{
              img: (props: any) => (
                <div className="my-8">
                  <Image
                    src={props.src}
                    alt={props.alt || ''}
                    width={800}
                    height={600}
                    className="rounded-lg w-full h-auto"
                  />
                </div>
              ),
              a: (props: any) => (
                <a
                  href={props.href}
                  className="text-[#00ff88] hover:text-[#00d9ff] underline"
                  target={props.href?.startsWith('http') ? '_blank' : undefined}
                  rel={props.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  {props.children}
                </a>
              ),
              code: (props: any) => (
                <code className="bg-gray-800 px-2 py-1 rounded text-[#00ff88]">
                  {props.children}
                </code>
              ),
              pre: (props: any) => (
                <pre className="bg-gray-900 p-4 rounded-lg overflow-x-auto my-4">
                  {props.children}
                </pre>
              ),
            }}
          />
        </div>

        {/* Comments Section */}
        <Comments postSlug={params.slug} />
      </div>
    </article>
  );
}
