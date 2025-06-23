'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function DashboardPage() {
  const [role, setRole] = useState('');
  const router = useRouter();

  useEffect(() => {
    const storedRole = localStorage.getItem('role');
    if (!storedRole) {
      router.push('/login');
    } else {
      setRole(storedRole);
    }
  }, [router]);

  return (
    <div className="min-h-screen bg-[#fffaf5] font-sans">
      {/* Header */}
      <header className="bg-orange-500 text-white flex justify-between items-center px-8 py-4 shadow-md">
        <div className="flex items-center gap-3">
          <img src="/logo.svg" alt="logo" className="w-8 h-8" />
          <span className="text-xl font-bold">PetGuardian</span>
        </div>
        <nav className="flex gap-8 text-sm font-medium">
          <Link href="#">Booking</Link>
          {role !== 'user' && <Link href="#">My Booking</Link>}
          {role === 'admin' && <Link href="#">Admin Panel</Link>}
          <Link href="/login">Logout</Link>
        </nav>
      </header>

      {/* Greeting */}
      <section className="px-10 py-6">
        <h2 className="text-xl text-orange-500 font-semibold">Hi, {role}</h2>
        <p className="text-sm text-gray-500">
          {role === 'admin' && 'Manage the system efficiently.'}
          {role === 'staff' && 'Check and handle incoming bookings.'}
          {role === 'user' && 'Take care of your pet!'}
        </p>
      </section>

      {/* Content Berdasarkan Role */}
      <section className="bg-white m-6 rounded-2xl shadow-sm px-10 py-6">
        {role === 'user' && (
          <>
            <h3 className="text-lg font-bold mb-6 text-gray-800">Services</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link href="/dashboard/grooming">
                <div className="bg-lime-100 p-6 rounded-xl flex flex-col items-center shadow hover:scale-105 transition cursor-pointer">
                  <Image src="/image/anjing-poy.jpg" alt="Grooming" width={100} height={100} />
                  <p className="mt-4 font-semibold text-gray-700">Grooming</p>
                </div>
              </Link>
              <div className="bg-sky-100 p-6 rounded-xl flex flex-col items-center shadow">
                <Image src="/vaccine.png" alt="Vaccine" width={100} height={100} />
                <p className="mt-4 font-semibold text-gray-700">Vaccine</p>
              </div>
              <div className="bg-violet-100 p-6 rounded-xl flex flex-col items-center shadow">
                <Image src="/hotel.png" alt="Pet Hotel" width={100} height={100} />
                <p className="mt-4 font-semibold text-gray-700">Pet Hotel</p>
              </div>
            </div>
          </>
        )}

        {role === 'staff' && (
          <div>
            <h3 className="text-lg font-bold mb-4">Daftar Booking Masuk</h3>
            <p>Contoh data booking pelanggan (dummy)</p>
            {/* Tambahkan table booking di sini */}
          </div>
        )}

        {role === 'admin' && (
          <div>
            <h3 className="text-lg font-bold mb-4">Admin Dashboard</h3>
            <p>Kelola pengguna, layanan, dan sistem.</p>
            {/* Tambahkan link ke manajemen user, statistik, dll */}
          </div>
        )}
      </section>
    </div>
  );
}
