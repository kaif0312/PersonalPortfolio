import { getAllPosts } from '@/lib/ghost';
import Blog from '@/components/sections/Blog';

export default async function BlogPage() {
  let posts = [];
  
  try {
    posts = await getAllPosts(20); // Get more posts for blog listing page
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    // Continue with empty posts array - Blog component will handle it
  }
  
  return <Blog posts={posts} />;
}
