"use client"
import Admins from "./Admins"
import Image from 'next/image';
// import { useSession } from 'next-auth/react';
// import { useRouter } from 'next/navigation';
// import { useEffect } from 'react';
export default function About() {
  // const { data: session, status } = useSession();
  // const router = useRouter();

  // useEffect(() => {
  //   if (status === 'unauthenticated') {
  //     router.push('/login');
  //   }
  // }, [router]);

  // if (status === 'loading') return <div>Loading...</div>;
  // if (!session) return null;
  return (
    <section className="py-20 px-4 bg-gray-900 min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-8 text-center max-w-5xl">
        <h3 className="text-5xl md:text-6xl font-extrabold text-green-500 mb-8 drop-shadow-xl">
          About Us
        </h3>
        <p className="text-xl md:text-2xl text-gray-100 leading-relaxed max-w-4xl mx-auto mb-10 animate-shine">
          XIAOHONGSHUUI is your ultimate destination for meme coin insights and crypto opportunities. Led by @asianelon0 and @ASIANBEAST1, we’re building a community where enthusiasts and investors connect. Join our Telegram channel to stay ahead with exclusive updates and strategies!
        </p>
        <a
          href="https://t.me/XIAOHONGSHUUI"
          className="inline-block text-xl md:text-3xl bg-green-500 text-black font-semibold py-7 px-20 rounded-xl hover:bg-green-400 transition-colors duration-300 shadow-lg hover:shadow-green-500/50"
          target="_blank"
          rel="noopener noreferrer"
        >
          Join the Community
        </a>
        <div className="mt-16">
          <Image
              src="/images/logo-placeholder.jpg"
              alt="XIAOHONGSHUUI Logo"
              width={150}
              height={150}
              className="mx-auto mb-2 rounded-full"
              unoptimized
            />
          <Admins />
        </div>
      </div>
    </section>
  )
}