'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { EyeOff } from 'lucide-react';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [visible, setVisible] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    if (email && password) {
  // Simulasi role berdasarkan email
  let role = 'user';
  if (email.includes('petugas')) role = 'staff';
  if (email.includes('admin')) role = 'admin';

  localStorage.setItem('role', role);
  router.push('/dashboard');
    }
  };

  return (
    <div className="flex min-h-screen font-sans">
      {/* Panel kiri (oranye, logo) */}
      <div className="w-1/2 bg-orange-400 text-white flex flex-col justify-center items-center px-10">
        <div className="bg-white p-6 rounded-full mb-6">
          <img src="/image/Splash_Screen-removebg-preview.png" alt="logo" className="w-24 h-24" />
        </div>
        <h1 className="text-3xl font-bold">PetGuardian</h1>
        <p className="text-sm mt-2">"Your Pets' Lifelong Protector"</p>
      </div>

      {/* Panel kanan (form) */}
      <div className="w-1/2 flex flex-col justify-center px-16">
        <h2 className="text-2xl font-bold mb-6 text-orange-500">Login</h2>
        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              placeholder="Input Text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-orange-300 px-4 py-2 rounded-md focus:outline-none"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <div className="relative">
              <input
                type={visible ? 'text' : 'password'}
                placeholder="Input Text"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border border-orange-300 px-4 py-2 rounded-md pr-10 focus:outline-none"
              />
              <span
                onClick={() => setVisible(!visible)}
                className="absolute inset-y-0 right-3 flex items-center text-orange-400 cursor-pointer"
              >
                <EyeOff className="w-5 h-5" />
              </span>
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 transition"
          >
            Masuk
          </button>
        </form>

        {/* Link ke Register */}
        <p className="text-sm mt-4 text-gray-600">
          Belum punya akun?{' '}
          <Link href="/register" className="text-orange-500 hover:underline">
            Daftar
          </Link>
        </p>
      </div>
    </div>
  );
}
// This code defines a login page for a pet care service application using Next.js and React.
// It includes a left panel with the logo and branding, and a right panel with a login