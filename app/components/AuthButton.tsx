'use client';
import { useSession } from 'next-auth/react';
import Link from 'next/link';

export default function AuthButton() {
  const { data: session, status } = useSession();

  if (status === 'loading') return <div>Loading...</div>;
  if (!session) return null;

  return (
    <Link
      href="/about"
      className="inline-block bg-green-500 text-gray-900 font-bold py-2 px-6 rounded-lg hover:bg-green-400 transition text-base md:text-lg"
      target="_self"
      rel="noopener noreferrer"
    >
      Click Here
    </Link>
  );
}