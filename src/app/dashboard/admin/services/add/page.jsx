'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AddServicePage() {
  const router = useRouter();
  const [form, setForm] = useState({
    nama: '',
    durasi: '',
    role: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const existing = JSON.parse(localStorage.getItem('services') || '[]');
    const updated = [...existing, form];
    localStorage.setItem('services', JSON.stringify(updated));

    // Memicu event agar dashboard bisa refresh daftar layanan
    window.dispatchEvent(new Event('service-updated'));

    router.push('/dashboard/admin');
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold text-orange-500 mb-4">Tambah Layanan Baru</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Nama Layanan"
          className="w-full border px-4 py-2 rounded"
          value={form.nama}
          onChange={(e) => setForm({ ...form, nama: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Deskripsi"
          className="w-full border px-4 py-2 rounded"
          value={form.deskripsi}
          onChange={(e) => setForm({ ...form, deskripsi: e.target.value })}
          required
        />
    
        <button
          type="submit"
          className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600"
        >
          Simpan
        </button>
      </form>
    </div>
  );
}
