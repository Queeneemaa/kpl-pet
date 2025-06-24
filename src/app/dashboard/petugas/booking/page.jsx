// src/app/dashboard/petugas/booking/page.jsx

'use client';
export default function BookingListPetugas() {
  const bookings = [
    { id: 1, layanan: 'Grooming', namaHewan: 'Milo', tanggal: '2025-06-25' },
    { id: 2, layanan: 'Vaccine', namaHewan: 'Bimo', tanggal: '2025-06-26' },
    { id: 3, layanan: 'Pet Hotel', namaHewan: 'Luna', tanggal: '2025-06-27' },
  ];

  return (
    <div className="min-h-screen bg-white p-6 font-sans">
      <nav className="bg-orange-600 text-white p-4 flex justify-between">
        <span className="font-bold">PetGuardian</span>
        <a href="/dashboard/petugas">Kembali ke Dashboard</a>
      </nav>

      <div className="mt-6">
        <h1 className="text-xl font-bold mb-4">Daftar Booking User</h1>
        <ul>
          {bookings.map((item) => (
            <li key={item.id} className="mb-3 p-4 bg-gray-100 rounded">
              <strong>{item.layanan}</strong> - {item.namaHewan} (Tanggal: {item.tanggal})
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
