'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function DashboardPage() {
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
          <Link href="#">My Booking</Link>
          <Link href="/login">Logout</Link>
        </nav>
      </header>

      {/* Greeting */}
      <section className="px-10 py-6">
        <h2 className="text-xl text-orange-500 font-semibold">Hi, <span className="text-orange-600">Keykey</span></h2>
        <p className="text-sm text-gray-500">Take care of your pet !</p>
      </section>

      {/* Services */}
      <section className="bg-white m-6 rounded-2xl shadow-sm px-10 py-6">
        <h3 className="text-lg font-bold mb-6 text-gray-800">Services</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Grooming */}
          <Link href="/dashboard/grooming">
            <div className="bg-lime-100 p-6 rounded-xl flex flex-col items-center shadow hover:scale-105 transition cursor-pointer">
              <Image src="/grooming.png" alt="Grooming" width={100} height={100} />
              <p className="mt-4 font-semibold text-gray-700">Grooming</p>
            </div>
          </Link>

          {/* Vaccine */}
          <div className="bg-sky-100 p-6 rounded-xl flex flex-col items-center shadow">
            <Image src="/vaccine.png" alt="Vaccine" width={100} height={100} />
            <p className="mt-4 font-semibold text-gray-700">Vaccine</p>
          </div>

          {/* Pet Hotel */}
          <div className="bg-violet-100 p-6 rounded-xl flex flex-col items-center shadow">
            <Image src="/hotel.png" alt="Pet Hotel" width={100} height={100} />
            <p className="mt-4 font-semibold text-gray-700">Pet Hotel</p>
          </div>
        </div>
      </section>
    </div>
  );
}
