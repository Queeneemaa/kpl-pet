'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AddStaffPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    name: '',
    email: '',
    role: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const existing = JSON.parse(localStorage.getItem('staffs') || '[]');
    const updated = [...existing, form];
    localStorage.setItem('staffs', JSON.stringify(updated));

    // Kirim event supaya dashboard admin update daftar otomatis
    window.dispatchEvent(new Event('staff-updated'));

    router.push('/dashboard/admin');
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold text-orange-500 mb-4">Tambah Petugas Baru</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Nama Petugas"
          className="w-full border px-4 py-2 rounded"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
        />
        <input
          type="email"
          placeholder="Email Petugas"
          className="w-full border px-4 py-2 rounded"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Role (mis. Dokter, Groomer, etc)"
          className="w-full border px-4 py-2 rounded"
          value={form.role}
          onChange={(e) => setForm({ ...form, role: e.target.value })}
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
