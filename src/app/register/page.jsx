// src/app/register/page.jsx
import Link from 'next/link';

export default function RegisterPage() {
  return (
    <div className="flex min-h-screen">
      {/* Panel Kiri (Oranye) */}
      <div className="w-1/2 bg-orange-400 text-white flex flex-col justify-center items-center px-10">
        <h1 className="text-3xl font-bold">PetGuardian</h1>
        <p className="text-sm mt-2">"Your Pets' Lifelong Protector"</p>
      </div>

      {/* Panel Kanan (Form) */}
      <div className="w-1/2 flex flex-col justify-center px-16">
        <h2 className="text-2xl font-bold mb-6 text-orange-500">Register</h2>
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Name"
            className="border border-orange-300 px-4 py-2 rounded-md focus:outline-none"
          />
          <input
            type="email"
            placeholder="Email"
            className="border border-orange-300 px-4 py-2 rounded-md focus:outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            className="border border-orange-300 px-4 py-2 rounded-md focus:outline-none"
          />
          <button
            type="submit"
            className="bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600"
          >
            Daftar
          </button>
        </form>
        <p className="text-sm mt-4">
          Sudah punya akun?{' '}
          <Link href="/login" className="text-orange-500 hover:underline">
            Masuk
          </Link>
        </p>
      </div>
    </div>
  );
}
