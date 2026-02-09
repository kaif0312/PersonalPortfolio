import { NextRequest, NextResponse } from 'next/server';
import { verifyAdmin, setAdminSession } from '@/lib/auth';

export async function POST(request: NextRequest) {
  try {
    const { password } = await request.json();
    
    const isValid = await verifyAdmin(password);
    
    if (isValid) {
      await setAdminSession();
      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json(
        { success: false, error: 'Invalid password' },
        { status: 401 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Invalid request' },
      { status: 400 }
    );
  }
}
