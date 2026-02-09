import { redirect } from 'next/navigation';
import { isAdmin } from '@/lib/auth';
import AdminDashboard from '@/components/admin/AdminDashboard';

export default async function AdminPage() {
  try {
    const admin = await isAdmin();
    
    if (!admin) {
      redirect('/admin/login');
    }
    
    return <AdminDashboard />;
  } catch (error) {
    console.error('Admin page error:', error);
    redirect('/admin/login');
  }
}
