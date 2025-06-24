'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import BookingForm from '@/components/BookingForm';

export default function GroomingPage() {
  const router = useRouter();

  const handleBookingClick = () => {
    router.push('/dashboard/user/booking');
  };

  return (
    <div className="min-h-screen bg-[#fffaf5] font-sans">
      {/* Header */}
      <header className="bg-orange-500 text-white flex justify-between items-center px-8 py-4 shadow-md">
        <div className="flex items-center gap-3">
          <Image src="/logo.svg" alt="logo" width={32} height={32} className="rounded-full" />
          <span className="text-xl font-bold">PetGuardian</span>
        </div>
        <nav className="flex gap-8 text-sm font-medium">
          <Link href="/dashboard/user/booking">Booking</Link>
          <Link href="/dashboard/user/my-booking">My Booking</Link>
          <Link href="/login">Logout</Link>
        </nav>
      </header>

      {/* Greeting */}
      <section className="px-10 py-6">
        <h2 className="text-xl text-orange-500 font-semibold">
          Hi, <span className="text-orange-600">Keykey</span>
        </h2>
        <p className="text-sm text-gray-500">Take care of your pet !</p>
      </section>

      {/* Grooming Content */}
      <section className="bg-white m-6 rounded-2xl shadow-sm px-10 py-6">
        <h3 className="text-lg font-bold mb-4 text-gray-800">Grooming</h3>

        <p className="font-medium mb-2">Rules :</p>
        <ol className="list-decimal list-inside text-gray-800 space-y-3">
          <li>
            <strong>Jenis Hewan yang Diizinkan:</strong> Layanan grooming hanya tersedia untuk anjing dan kucing. Hewan lain tidak dapat dilayani.
          </li>
          <li>
            <strong>Kondisi Kesehatan Hewan:</strong> Harap pastikan hewan dalam kondisi sehat, tidak terluka, tidak sedang sakit, dan tidak memiliki kutu/penyakit kulit menular.
          </li>
          <li>
            <strong>Sikap atau Perilaku Hewan:</strong> Jika hewan Anda agresif atau sulit dikendalikan, mohon beri keterangan di kolom catatan saat booking.
          </li>
          <li>
            <strong>Waktu Booking:</strong> Booking grooming hanya bisa dilakukan untuk hari berikutnya (H-1) atau lebih, tidak untuk hari yang sama.
          </li>
          <li>
            <strong>Datang Tepat Waktu:</strong> Mohon hadir 10 menit sebelum waktu grooming agar tidak mengganggu jadwal pelanggan lain.
          </li>
          <li>
            <strong>Pembatalan Booking:</strong> Jika ingin membatalkan, harap lakukan minimal 2 jam sebelum jadwal melalui sistem atau hubungi petugas.
          </li>
        </ol>

        <div className="mt-8 text-center">
          <button
            onClick={handleBookingClick}
            className="bg-orange-500 text-white py-2 px-8 rounded-md hover:bg-orange-600 transition"
          >
            Booking
          </button>
        </div>
      </section>
    </div>
  );
}
