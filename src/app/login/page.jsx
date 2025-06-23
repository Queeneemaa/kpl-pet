'use client';
import Link from 'next/link';

export default function LoginPage() {
  return (
    <div className="flex h-screen">
      {/* Kiri: Deskripsi Saja (tanpa logo) */}
      <div className="w-1/2 bg-orange-400 flex flex-col justify-center items-center text-white">
        <h1 className="text-3xl font-bold">PetGuardian</h1>
        <p className="text-sm mt-2">"Your Pets' Lifelong Protector"</p>
      </div>

      {/* Kanan: Form Login */}
      <div className="w-1/2 flex flex-col justify-center items-center">
        <h2 className="text-2xl font-semibold text-orange-500 mb-6">Login</h2>
        <form className="w-2/3 max-w-sm space-y-4">
          <div>
            <label className="block text-sm text-gray-600 mb-1">Email</label>
            <input
              type="email"
              className="w-full border border-orange-300 rounded px-4 py-2 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1">Password</label>
            <input
              type="password"
              className="w-full border border-orange-300 rounded px-4 py-2 focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-orange-400 text-white py-2 rounded hover:bg-orange-500 transition"
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-sm text-gray-600">
          Belum punya akun?{' '}
          <Link href="/register" className="text-orange-500 hover:underline">
            Daftar
          </Link>
        </p>
      </div>
    </div>
  );
}
