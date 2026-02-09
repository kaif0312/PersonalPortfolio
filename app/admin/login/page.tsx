'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Lock, ArrowRight } from 'lucide-react';

export default function AdminLogin() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });

      const data = await response.json();

      if (data.success) {
        router.push('/admin');
        router.refresh();
      } else {
        setError(data.error || 'Invalid password');
      }
    } catch (err) {
      setError('Failed to login. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a] p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass rounded-lg p-6 sm:p-8 max-w-md w-full"
      >
        <div className="text-center mb-6 sm:mb-8">
          <Lock size={40} className="sm:w-12 sm:h-12 text-[#00ff88] mx-auto mb-4" />
          <h1 className="text-2xl sm:text-3xl font-bold gradient-text mb-2">Admin Login</h1>
          <p className="text-gray-400 text-sm sm:text-base">Enter password to access admin panel</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-[#00ff88] transition-colors text-sm sm:text-base touch-manipulation"
              placeholder="Enter admin password"
            />
          </div>

          {error && (
            <div className="text-red-400 text-sm">{error}</div>
          )}

          <motion.button
            type="submit"
            disabled={loading}
            className="w-full px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-[#00ff88] to-[#00d9ff] text-black font-semibold rounded-lg hover:shadow-lg hover:shadow-[#00ff88]/50 transition-all disabled:opacity-50 flex items-center justify-center gap-2 text-sm sm:text-base touch-manipulation"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {loading ? 'Logging in...' : 'Login'}
            {!loading && <ArrowRight size={18} className="sm:w-5 sm:h-5" />}
          </motion.button>
        </form>

        <div className="mt-4 sm:mt-6 text-center">
          <a href="/" className="text-gray-400 text-xs sm:text-sm hover:text-[#00ff88] transition-colors touch-manipulation">
            ← Back to Portfolio
          </a>
        </div>
      </motion.div>
    </div>
  );
}
