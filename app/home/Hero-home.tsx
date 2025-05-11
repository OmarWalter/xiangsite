import Image from 'next/image';
import { FlipWords } from '../components/flip-words';

export default function HeroHome() {
    const words = [
        'Welcome to XIAOHONGSHUUI',
        'Join our Telegram community',
        'Stay updated with crypto news',
        'Explore the world of meme coins',
        'Connect with fellow enthusiasts',
        'Join us on this exciting journey',
    ];
  return (
    <section className="py-4 text-center bg-gray-900 flex items-center justify-center">
      <div className="container mx-auto px-4 ">
        <Image
          src="/images/logo-placeholder.jpg"
          alt="XIAOHONGSHUUI Logo"
          width={150}
          height={150}
          className="mx-auto mb-2 animate-bounce rounded-full"
          unoptimized
        />
        <h2 className="text-5xl md:text-6xl font-bold text-green-400 mb-2">
          <FlipWords words={words}/>
        </h2>
        <p className="text-base text-blue-100 mb-4 text-3xl md:text-4xl animate-shine">
          Join our thriving Telegram community for exclusive crypto updates!
        </p>
        <a
          href="/about"
          className="inline-block bg-green-500 text-gray-900 font-bold py-5 px-10 rounded-lg hover:bg-green-400 transition text-base md:text-3xl"
          target="_self"
          rel="noopener noreferrer"
        >
          Click Here
        </a>
      </div>
    </section>
  );
}