'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function PetugasDashboard() {
  const [namaPetugas, setNamaPetugas] = useState('Sinta (Groomer)');
  const [daftarBooking, setDaftarBooking] = useState([
    {
      nama: 'Keykey',
      layanan: 'Grooming',
      waktu: '10:00 - 10:30',
      keterangan: 'Kucing Persia',
    },
    {
      nama: 'Bobby',
      layanan: 'Vaksin',
      waktu: '11:00 - 11:20',
      keterangan: 'Anjing Beagle',
    },
  ]);

  return (
    <div className="min-h-screen bg-[#fffaf5] font-sans">
      {/* Header */}
      <header className="bg-orange-500 text-white flex justify-between items-center px-8 py-4 shadow-md">
        <div className="flex items-center gap-3">
          <img src="/logo.svg" alt="logo" className="w-8 h-8" />
          <span className="text-xl font-bold">PetGuardian</span>
        </div>
        <nav className="flex gap-6 text-sm">
          <Link href="/login" className="hover:underline">Logout</Link>
        </nav>
      </header>

      {/* Greeting */}
      <section className="px-10 py-6">
        <h2 className="text-xl text-orange-500 font-semibold">Hi, {namaPetugas}</h2>
        <p className="text-sm text-gray-500">Berikut adalah daftar booking hari ini</p>
      </section>

      {/* Daftar Booking */}
      <section className="bg-white m-6 rounded-2xl shadow-sm px-10 py-6">
        <h3 className="text-lg font-bold mb-4 text-gray-800">Daftar Booking Masuk</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm border border-orange-300 rounded-md">
            <thead className="bg-orange-100 text-orange-600">
              <tr>
                <th className="px-4 py-2 border-b">No</th>
                <th className="px-4 py-2 border-b">Nama</th>
                <th className="px-4 py-2 border-b">Layanan</th>
                <th className="px-4 py-2 border-b">Waktu</th>
                <th className="px-4 py-2 border-b">Keterangan</th>
              </tr>
            </thead>
            <tbody>
              {daftarBooking.map((b, i) => (
                <tr key={i} className="text-gray-700">
                  <td className="border px-4 py-2 text-center">{i + 1}</td>
                  <td className="border px-4 py-2">{b.nama}</td>
                  <td className="border px-4 py-2">{b.layanan}</td>
                  <td className="border px-4 py-2">{b.waktu}</td>
                  <td className="border px-4 py-2">{b.keterangan}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
