'use client';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function PetugasDashboard() {
  const router = useRouter();

  const goToBooking = (layanan) => {
    router.push(`/dashboard/petugas/${layanan}`);
  };

  return (
    <div className="min-h-screen bg-[#fffaf5] font-sans">
      {/* Header */}
      <header className="bg-orange-500 text-white flex justify-between items-center px-8 py-4 shadow-md">
        <div className="flex items-center gap-2">
          <img src="/logo.svg" alt="logo" className="w-8 h-8" />
          <span className="text-xl font-bold">PetGuardian</span>
        </div>
        <nav className="flex gap-8 text-sm font-medium">
          <span className="cursor-pointer">Booking List</span>
          <span className="cursor-pointer">Logout</span>
        </nav>
      </header>

      {/* Content */}
      <main className="px-10 py-10">
        <h1 className="text-xl font-bold text-gray-800 mb-6">Booking List</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div onClick={() => goToBooking('grooming')} className="bg-lime-100 hover:scale-105 transition cursor-pointer p-6 rounded-2xl shadow flex flex-col items-center">
            <Image src="/image/kucing_grooming.png" alt="Grooming" width={100} height={100} />
            <p className="mt-4 font-semibold text-gray-700">Grooming</p>
          </div>
          <div onClick={() => goToBooking('vaccine')} className="bg-sky-100 hover:scale-105 transition cursor-pointer p-6 rounded-2xl shadow flex flex-col items-center">
            <Image src="/image/anjing_vaksin-removebg-preview.png" alt="Vaccine" width={100} height={100} />
            <p className="mt-4 font-semibold text-gray-700">Vaccine</p>
          </div>
          <div onClick={() => goToBooking('pet-hotel')} className="bg-purple-100 hover:scale-105 transition cursor-pointer p-6 rounded-2xl shadow flex flex-col items-center">
            <Image src="/image/kucing-removebg-preview.png" alt="Pet Hotel" width={100} height={100} />
            <p className="mt-4 font-semibold text-gray-700">Pet Hotel</p>
          </div>
        </div>
      </main>
    </div>
  );
}
