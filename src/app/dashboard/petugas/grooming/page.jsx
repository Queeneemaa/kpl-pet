'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function GroomingBookingPage() {
  const [bookings, setBookings] = useState([
    {
      id: 1,
      name: 'Max',
      animal: 'Dog',
      schedule: 'June 20, 2025',
      time: '10.00 am',
      owner: 'Andina',
      instructions: 'Eat 2 times a day too',
      isDone: false,
    },
    {
      id: 2,
      name: 'Max',
      animal: 'Dog',
      schedule: 'June 20, 2025',
      time: '10.00 am',
      owner: 'Andina',
      instructions: 'Eat 2 times a day too',
      isDone: true,
    },
  ]);

  const markAsDone = (id) => {
    setBookings((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, isDone: true } : item
      )
    );
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
          <span className="cursor-pointer">Booking list</span>
          <span className="cursor-pointer">Logout</span>
        </nav>
      </header>

      <main className="px-10 py-10">
        <h1 className="text-xl font-bold text-[#5c2e00] mb-2">Grooming</h1>
        <p className="text-sm text-gray-600 mb-6">Perhari ini</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {bookings.map((item) => (
            <div key={item.id} className="border-2 border-orange-300 p-6 rounded-xl shadow-sm">
              <p><strong>Animal Name :</strong> {item.name}</p>
              <p><strong>Animal :</strong> {item.animal}</p>
              <p><strong>Schedule :</strong> {item.schedule}</p>
              <p><strong>Time :</strong> {item.time}</p>
              <p><strong>Owner :</strong> {item.owner}</p>
              <p><strong>Instructions :</strong> {item.instructions}</p>
              <button
                onClick={() => markAsDone(item.id)}
                disabled={item.isDone}
                className={`mt-4 w-full py-2 rounded-md text-white transition ${
                  item.isDone ? 'bg-gray-400 cursor-not-allowed' : 'bg-orange-500 hover:bg-orange-600'
                }`}
              >
                Done
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
