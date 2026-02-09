'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { LogOut, MessageSquare, Trash2, Check, X } from 'lucide-react';
import { Comment } from '@/lib/comments';

export default function CommentsManagement() {
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    fetchComments();
  }, []);

  const fetchComments = async () => {
    try {
      const response = await fetch('/api/comments');
      const data = await response.json();
      setComments(data);
    } catch (error) {
      console.error('Failed to fetch comments:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this comment?')) return;

    try {
      const response = await fetch(`/api/comments/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        fetchComments();
      }
    } catch (error) {
      console.error('Failed to delete comment:', error);
    }
  };

  const handleLogout = async () => {
    await fetch('/api/auth/logout', { method: 'POST' });
    router.push('/admin/login');
    router.refresh();
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
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6 md:mb-8">
          <div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold gradient-text mb-2 flex items-center gap-2 sm:gap-3">
              <MessageSquare size={28} className="sm:w-10 sm:h-10" />
              <span>Comments Management</span>
            </h1>
            <p className="text-gray-400 text-sm sm:text-base">Manage comments on your blog posts</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 w-full sm:w-auto">
            <motion.a
              href="/admin"
              className="px-4 py-2.5 glass border border-[#00ff88]/50 text-[#00ff88] rounded-lg hover:bg-[#00ff88]/10 transition-all flex items-center justify-center gap-2 text-sm sm:text-base touch-manipulation"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Back to Dashboard
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

        {/* Comments List */}
        <div className="space-y-3 sm:space-y-4">
          {comments.length === 0 ? (
            <div className="text-center py-12 text-gray-400">
              <MessageSquare size={48} className="mx-auto mb-4 opacity-50" />
              <p>No comments yet.</p>
            </div>
          ) : (
            comments.map((comment) => (
              <motion.div
                key={comment.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="glass rounded-lg p-4 sm:p-6"
              >
                <div className="flex items-start justify-between mb-3 sm:mb-4 gap-3">
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-2">
                      <h4 className="font-semibold text-white text-sm sm:text-base">{comment.author}</h4>
                      <span className="text-gray-500 text-xs sm:text-sm truncate">{comment.email}</span>
                      <a
                        href={`/blog/${comment.postSlug}`}
                        className="text-[#00ff88] text-xs sm:text-sm hover:text-[#00d9ff] transition-colors whitespace-nowrap touch-manipulation"
                      >
                        View Post →
                      </a>
                    </div>
                    <p className="text-gray-400 text-xs sm:text-sm">
                      {new Date(comment.createdAt).toLocaleDateString('en-US', {
                        month: 'long',
                        day: 'numeric',
                        year: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit',
                      })}
                    </p>
                  </div>
                  <div className="flex gap-2 flex-shrink-0">
                    <button
                      onClick={() => handleDelete(comment.id)}
                      className="p-2 hover:bg-red-500/10 rounded transition-colors touch-manipulation"
                      aria-label="Delete comment"
                    >
                      <Trash2 size={18} className="text-red-400 sm:w-5 sm:h-5" />
                    </button>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed whitespace-pre-wrap text-sm sm:text-base">{comment.content}</p>
              </motion.div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
