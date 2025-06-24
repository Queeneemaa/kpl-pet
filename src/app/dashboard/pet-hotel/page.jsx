'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function PetHotelPage() {
  const router = useRouter();

  const handleBookingClick = () => {
    router.push('/dashboard/user/booking');
  };

  return (
    <div className="min-h-screen bg-[#fffaf5] font-sans">
      <header className="bg-orange-500 text-white flex justify-between items-center px-8 py-4 shadow-md">
        <div className="flex items-center gap-3">
          <Image src="/image/kucing-removebg-preview.png" alt="logo" width={32} height={32} />
          <span className="text-xl font-bold">PetGuardian</span>
        </div>
        <nav className="flex gap-8 text-sm font-medium">
          <Link href="/dashboard/user/booking">Booking</Link>
          <Link href="/dashboard/user/my-booking">My Booking</Link>
          <Link href="/login">Logout</Link>
        </nav>
      </header>

      <section className="px-10 py-6">
        <h2 className="text-xl text-orange-500 font-semibold">
          Hi, <span className="text-orange-600">Keykey</span>
        </h2>
        <p className="text-sm text-gray-500">Take care of your pet !</p>
      </section>

      <section className="bg-white m-6 rounded-2xl shadow-sm px-10 py-6">
        <h3 className="text-lg font-bold mb-4 text-gray-800">Pet Hotel</h3>

        <ul className="list-disc list-inside text-gray-700 mb-6">
          <li>Layanan penitipan hewan dengan pengawasan 24 jam.</li>
          <li>Boleh membawa mainan/hewan peliharaan favorit.</li>
          <li>Booking bisa dilakukan kapan saja.</li>
        </ul>

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
