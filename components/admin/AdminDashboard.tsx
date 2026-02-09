'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Plus, Edit, Trash2, LogOut, FileText, MessageSquare, X } from 'lucide-react';
import { BlogPost } from '@/lib/posts';

export default function AdminDashboard() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);
  const router = useRouter();

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await fetch('/api/posts?published=false');
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.error('Failed to fetch posts:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    await fetch('/api/auth/logout', { method: 'POST' });
    router.push('/admin/login');
    router.refresh();
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this post?')) return;

    try {
      const response = await fetch(`/api/posts/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        fetchPosts();
      }
    } catch (error) {
      console.error('Failed to delete post:', error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-[#00ff88]">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12 md:py-20 bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a]">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6 md:mb-8">
          <div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold gradient-text mb-2">Admin Dashboard</h1>
            <p className="text-gray-400 text-sm sm:text-base">Manage your blog posts</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 w-full sm:w-auto">
            <motion.a
              href="/admin/comments"
              className="px-4 py-2.5 glass border border-[#00d9ff]/50 text-[#00d9ff] rounded-lg hover:bg-[#00d9ff]/10 transition-all flex items-center justify-center gap-2 text-sm sm:text-base touch-manipulation"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <MessageSquare size={18} className="sm:w-5 sm:h-5" />
              <span>Comments</span>
            </motion.a>
            <motion.button
              onClick={handleLogout}
              className="px-4 py-2.5 glass border border-red-500/50 text-red-400 rounded-lg hover:bg-red-500/10 transition-all flex items-center justify-center gap-2 text-sm sm:text-base touch-manipulation"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <LogOut size={18} className="sm:w-5 sm:h-5" />
              <span>Logout</span>
            </motion.button>
          </div>
        </div>

        {/* Create/Edit Form */}
        {(showCreateForm || editingPost) && (
          <PostForm
            post={editingPost}
            onClose={() => {
              setShowCreateForm(false);
              setEditingPost(null);
            }}
            onSuccess={() => {
              setShowCreateForm(false);
              setEditingPost(null);
              fetchPosts();
            }}
          />
        )}

        {/* Posts List */}
        <div className="mb-6 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
          <h2 className="text-xl sm:text-2xl font-bold text-white">Blog Posts ({posts.length})</h2>
          <motion.button
            onClick={() => setShowCreateForm(true)}
            className="px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-[#00ff88] to-[#00d9ff] text-black font-semibold rounded-lg hover:shadow-lg hover:shadow-[#00ff88]/50 transition-all flex items-center justify-center gap-2 text-sm sm:text-base touch-manipulation"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Plus size={18} className="sm:w-5 sm:h-5" />
            <span>New Post</span>
          </motion.button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {posts.map((post) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass rounded-lg p-4 sm:p-6"
            >
              <div className="flex items-start justify-between mb-3 sm:mb-4">
                <span className={`px-2 py-1 rounded text-xs ${post.published ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'}`}>
                  {post.published ? 'Published' : 'Draft'}
                </span>
                <div className="flex gap-2">
                  <button
                    onClick={() => setEditingPost(post)}
                    className="p-2 hover:bg-[#00ff88]/10 rounded transition-colors touch-manipulation"
                    aria-label="Edit post"
                  >
                    <Edit size={18} className="text-[#00ff88] sm:w-4 sm:h-4" />
                  </button>
                  <button
                    onClick={() => handleDelete(post.id)}
                    className="p-2 hover:bg-red-500/10 rounded transition-colors touch-manipulation"
                    aria-label="Delete post"
                  >
                    <Trash2 size={18} className="text-red-400 sm:w-4 sm:h-4" />
                  </button>
                </div>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-white mb-2 line-clamp-2">{post.title}</h3>
              <p className="text-gray-400 text-sm mb-3 sm:mb-4 line-clamp-2">{post.excerpt}</p>
              
              <div className="flex items-center justify-between text-xs text-gray-500 mb-3 sm:mb-4">
                <span>{new Date(post.date).toLocaleDateString()}</span>
                <span>{post.category}</span>
              </div>

              <a
                href={`/blog/${post.slug}`}
                target="_blank"
                className="mt-3 sm:mt-4 inline-flex items-center gap-1 text-[#00ff88] text-sm hover:text-[#00d9ff] transition-colors touch-manipulation"
              >
                View Post <FileText size={14} />
              </a>
            </motion.div>
          ))}
        </div>

        {posts.length === 0 && (
          <div className="text-center py-12 text-gray-400">
            <FileText size={48} className="mx-auto mb-4 opacity-50" />
            <p>No posts yet. Create your first post!</p>
          </div>
        )}
      </div>
    </div>
  );
}

function PostForm({ post, onClose, onSuccess }: { post: BlogPost | null; onClose: () => void; onSuccess: () => void }) {
  const [formData, setFormData] = useState({
    title: post?.title || '',
    slug: post?.slug || '',
    excerpt: post?.excerpt || '',
    category: post?.category || 'General',
    content: post?.content || '',
    image: post?.image || '',
    published: post?.published ?? true,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const url = post ? `/api/posts/${post.id}` : '/api/posts';
      const method = post ? 'PUT' : 'POST';

      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          date: post?.date || new Date().toISOString().split('T')[0],
          author: 'Ibrahim Kaif',
        }),
      });

      if (response.ok) {
        onSuccess();
      } else {
        const data = await response.json();
        setError(data.error || 'Failed to save post');
      }
    } catch (err) {
      setError('Failed to save post. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-start md:items-center justify-center p-0 sm:p-4 overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass rounded-none sm:rounded-lg p-4 sm:p-6 md:p-8 max-w-4xl w-full min-h-screen sm:min-h-0 sm:max-h-[90vh] overflow-y-auto"
      >
        <div className="flex items-center justify-between mb-4 sm:mb-6">
          <h2 className="text-xl sm:text-2xl font-bold gradient-text">
            {post ? 'Edit Post' : 'Create New Post'}
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-800 rounded-lg transition-colors md:hidden touch-manipulation"
            aria-label="Close"
          >
            <X size={24} className="text-gray-400" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Title *
              </label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    title: e.target.value,
                    slug: formData.slug || generateSlug(e.target.value),
                  });
                }}
                required
                className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-[#00ff88] transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Slug *
              </label>
              <input
                type="text"
                value={formData.slug}
                onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                required
                className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-[#00ff88] transition-colors"
                placeholder="url-friendly-slug"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Excerpt *
            </label>
            <textarea
              value={formData.excerpt}
              onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
              required
              rows={2}
              className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-[#00ff88] transition-colors resize-none text-sm sm:text-base"
              placeholder="Short description of the post"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Category *
              </label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                required
                className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-[#00ff88] transition-colors"
              >
                <option value="Research">Research</option>
                <option value="Engineering">Engineering</option>
                <option value="AI/ML">AI/ML</option>
                <option value="General">General</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Featured Image (optional)
              </label>
              <input
                type="text"
                value={formData.image}
                onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-[#00ff88] transition-colors"
                placeholder="/blog-images/image.jpg"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Content (Markdown) *
            </label>
            <textarea
              value={formData.content}
              onChange={(e) => setFormData({ ...formData, content: e.target.value })}
              required
              rows={12}
              className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-[#00ff88] transition-colors resize-none font-mono text-xs sm:text-sm"
              placeholder="# Your Post Title

Write your content in markdown here..."
            />
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="published"
              checked={formData.published}
              onChange={(e) => setFormData({ ...formData, published: e.target.checked })}
              className="w-4 h-4 rounded border-gray-700 bg-gray-900/50 text-[#00ff88] focus:ring-[#00ff88]"
            />
            <label htmlFor="published" className="text-gray-300">
              Publish immediately
            </label>
          </div>

          {error && (
            <div className="text-red-400 text-sm">{error}</div>
          )}

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2">
            <motion.button
              type="submit"
              disabled={loading}
              className="flex-1 px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-[#00ff88] to-[#00d9ff] text-black font-semibold rounded-lg hover:shadow-lg hover:shadow-[#00ff88]/50 transition-all disabled:opacity-50 text-sm sm:text-base touch-manipulation"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {loading ? 'Saving...' : post ? 'Update Post' : 'Create Post'}
            </motion.button>
            <motion.button
              type="button"
              onClick={onClose}
              className="px-4 sm:px-6 py-2.5 sm:py-3 glass border border-gray-700 text-gray-300 font-semibold rounded-lg hover:bg-gray-800 transition-all text-sm sm:text-base touch-manipulation"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Cancel
            </motion.button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}
