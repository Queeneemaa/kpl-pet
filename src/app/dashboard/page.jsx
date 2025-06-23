'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import withAuth from '../components/withAuth';

export default function Dashboard() {
  const router = useRouter();

  useEffect(() => {
    const isAuth = localStorage.getItem('auth');
    if (isAuth !== 'true') {
      router.push('/login');
    }
  }, [router]);

  return (
    <div className="h-screen flex items-center justify-center">
      <h1 className="text-2xl font-semibold text-orange-500">Welcome to Dashboard 🐾</h1>
    </div>
  );

  <button
  onClick={() => {
    localStorage.removeItem('auth');
    location.href = '/login';
  }}
  className="mt-6 px-4 py-2 bg-red-500 text-white rounded"
>
  Logout
</button>
}
