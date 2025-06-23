import './globals.css';

export const metadata = {
  title: 'PetGuardian',
  description: "Your Pets' Lifelong Protector",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-black">{children}</body>
    </html>
  );
}
