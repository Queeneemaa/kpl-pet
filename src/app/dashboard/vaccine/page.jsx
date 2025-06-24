'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function VaccinePage() {
  const router = useRouter();

  const handleBookingClick = () => {
    router.push('/dashboard/user/booking?service=Vaccine');
  };

  return (
    <div className="min-h-screen bg-[#fffaf5] font-sans">
      <header className="bg-orange-500 text-white flex justify-between items-center px-8 py-4 shadow-md">
        <div className="flex items-center gap-3">
          <img src="/logo.svg" alt="logo" className="w-8 h-8" />
          <span className="text-xl font-bold">PetGuardian</span>
        </div>
        <nav className="flex gap-8 text-sm font-medium">
          <Link href="/dashboard/booking">Booking</Link>
          <Link href="/dashboard/my-booking">My Booking</Link>
          <Link href="/login">Logout</Link>
        </nav>
      </header>

      <section className="px-10 py-6">
        <h2 className="text-xl text-orange-500 font-semibold">Hi, <span className="text-orange-600">User</span></h2>
        <p className="text-sm text-gray-500">Vaccination Service for your Pet</p>
      </section>

      <section className="bg-white m-6 rounded-2xl shadow-sm px-10 py-6">
        <h3 className="text-lg font-bold mb-4 text-gray-800">Vaccine</h3>
        <p className="text-gray-700 mb-6">Pastikan hewan peliharaan dalam kondisi sehat untuk vaksinasi.</p>
        <div className="text-center">
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
