'use client';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useState } from 'react';

export default function TambahPage() {
  const router = useRouter();
  const [petugas, setPetugas] = useState({ nama: '', role: '' });
  const [layanan, setLayanan] = useState({ nama: '', durasi: '', role: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Data berhasil ditambahkan (simulasi)');
    router.push('/dashboard/admin');
  };

  return (
    <div className="min-h-screen bg-[#fffaf5] font-sans">
      {/* Header */}
      <header className="bg-orange-500 text-white flex justify-between items-center px-8 py-4 shadow-md">
        <div className="flex items-center gap-3">
          <img src="/logo.svg" alt="logo" className="w-8 h-8" />
          <span className="text-xl font-bold">PetGuardian</span>
        </div>
        <nav>
          <Link href="/login" className="hover:underline">
            Logout
          </Link>
        </nav>
      </header>

      {/* Title */}
      <section className="px-10 py-6">
        <h2 className="text-xl text-orange-500 font-semibold">Admin</h2>
      </section>

      {/* Form */}
      <section className="bg-white m-6 rounded-2xl shadow-sm px-10 py-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Form Petugas */}
        <form
          onSubmit={handleSubmit}
          className="border-2 border-orange-300 rounded-xl p-6 text-orange-500 flex flex-col gap-4"
        >
          <h3 className="text-center font-bold text-lg mb-2">Tambah Petugas</h3>
          <div>
            <label className="block text-sm">Nama</label>
            <input
              type="text"
              value={petugas.nama}
              onChange={(e) => setPetugas({ ...petugas, nama: e.target.value })}
              className="w-full border border-orange-300 rounded px-2 py-1"
            />
          </div>
          <div>
            <label className="block text-sm">Role</label>
            <input
              type="text"
              value={petugas.role}
              onChange={(e) => setPetugas({ ...petugas, role: e.target.value })}
              className="w-full border border-orange-300 rounded px-2 py-1"
            />
          </div>
          <button
            type="submit"
            className="bg-orange-400 hover:bg-orange-500 text-white py-2 rounded-md text-sm"
          >
            ➕ Tambah Petugas
          </button>
        </form>

        {/* Form Layanan */}
        <form
          onSubmit={handleSubmit}
          className="border-2 border-orange-300 rounded-xl p-6 text-orange-500 flex flex-col gap-4"
        >
          <h3 className="text-center font-bold text-lg mb-2">Tambah Layanan</h3>
          <div>
            <label className="block text-sm">Nama Layanan</label>
            <input
              type="text"
              value={layanan.nama}
              onChange={(e) => setLayanan({ ...layanan, nama: e.target.value })}
              className="w-full border border-orange-300 rounded px-2 py-1"
            />
          </div>
          <div>
            <label className="block text-sm">Durasi</label>
            <input
              type="text"
              value={layanan.durasi}
              onChange={(e) => setLayanan({ ...layanan, durasi: e.target.value })}
              className="w-full border border-orange-300 rounded px-2 py-1"
            />
          </div>
          <div>
            <label className="block text-sm">Role</label>
            <input
              type="text"
              value={layanan.role}
              onChange={(e) => setLayanan({ ...layanan, role: e.target.value })}
              className="w-full border border-orange-300 rounded px-2 py-1"
            />
          </div>
          <button
            type="submit"
            className="bg-orange-400 hover:bg-orange-500 text-white py-2 rounded-md text-sm"
          >
            ➕ Tambah Layanan
          </button>
        </form>
      </section>
    </div>
  );
}
