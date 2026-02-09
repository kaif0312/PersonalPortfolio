import { redirect } from 'next/navigation';
import { isAdmin } from '@/lib/auth';
import CommentsManagement from '@/components/admin/CommentsManagement';

export default async function CommentsPage() {
  const admin = await isAdmin();
  
  if (!admin) {
    redirect('/admin/login');
  }
  
  return <CommentsManagement />;
}
