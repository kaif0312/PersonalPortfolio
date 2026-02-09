import { getAllPosts } from '@/lib/posts';
import Blog from '@/components/sections/Blog';

export default function BlogPage() {
  const posts = getAllPosts(true);
  
  return <Blog posts={posts} />;
}
