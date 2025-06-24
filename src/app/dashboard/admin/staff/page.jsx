'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function StaffListPage() {
  const [staffs, setStaffs] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('staffs') || '[]');
    setStaffs(data);
  }, []);

  const handleDeleteStaff = (index) => {
    const updatedStaffs = [...staffs];
    updatedStaffs.splice(index, 1);
    setStaffs(updatedStaffs);
    localStorage.setItem('staffs', JSON.stringify(updatedStaffs));
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-orange-500 mb-4">Daftar Petugas</h2>
      <Link href="/dashboard/admin/staff/add">
        <button className="mb-4 bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">
          Tambah Petugas
        </button>
      </Link>

      <ol className="list-decimal list-inside mb-6 space-y-2">
        {staffs.map((p, i) => (
          <li key={i}>
            <div className="flex justify-between items-center">
              <div>
                <p className="font-medium">{p.name}</p>
                <p className="text-sm text-gray-600">Role: {p.role || '-'}</p>
              </div>
              <button
                onClick={() => handleDeleteStaff(i)}
                className="text-sm text-red-500 hover:underline"
              >
                Hapus
              </button>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
