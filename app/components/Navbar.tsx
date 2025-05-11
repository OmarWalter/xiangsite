'use client';

import { useState, useEffect, Suspense } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import SignUpModal from '../modals/SignUpModal';
import LoginModal from '../modals/LoginModal';

export default function Navbar() {
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [animateLogo, setAnimateLogo] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  // Sync modal state with URL
  useEffect(() => {
    setIsLoginOpen(pathname === '/login');
    setIsSignUpOpen(pathname === '/signup');
  }, [pathname]);

  // Trigger logo animation
  useEffect(() => {
    setAnimateLogo(true);
  }, []);

  // Check login status (replace with real auth logic)
useEffect(() => {
    const checkLoginStatus = () => {
      const token = document.cookie
        .split('; ')
        .find((row) => row.startsWith('token='))
        ?.split('=')[1];
      setIsLoggedIn(!!token);
    };
    checkLoginStatus();
  }, []);

  // Handle modal close
  const handleClose = () => {
    setIsLoginOpen(false);
    setIsSignUpOpen(false);
    router.push('/'); // Redirect to home or previous page
  };

  return (
    <>
      <nav className="fixed top-10 w-[300px] md:w-[600px] lg:w-[900px] mx-auto z-50 bg-white bg-opacity-50 backdrop-blur-md supports-[backdrop-filter]:bg-white/50 rounded-full">
        <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
            aria-label="Go to homepage"
          >
            <span
              className={`self-center text-2xl font-semibold whitespace-nowrap text-gray-900 transition-transform duration-2000 ${
                animateLogo ? 'animate-logo-move animate-shine' : ''
              }`}
            >
              XIAOHONGSHUUI
            </span>
          </Link>

          {/* Buttons */}
          <div className="flex gap-4">
            {isLoggedIn && (
              <button
                type="button"
                className="text-white bg-black/70 hover:bg-white/30 focus:ring-4 focus:outline-none focus:ring-white/50 font-medium rounded-lg text-sm px-4 py-2 text-center transition-colors"
                aria-label="Learn more about us"
              >
                About Us
              </button>
            )}
            <Link
              href="/login"
              className="text-white bg-black/70 hover:bg-white/30 focus:ring-4 focus:outline-none focus:ring-white/50 font-medium rounded-lg text-xl px-8 py-5 text-center transition-colors"
              aria-label="Log in to your account"
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="text-white bg-black/90 hover:bg-white/50 focus:ring-4 focus:outline-none focus:ring-white/50 font-medium rounded-lg text-xl px-8 py-5 text-center transition-colors"
              aria-label="Sign up for a new account"
            >
              SignUp
            </Link>
          </div>
        </div>
      </nav>

      {/* Modals */}
      <Suspense fallback={<div>Loading...</div>}>
        <LoginModal isOpen={isLoginOpen} onClose={handleClose} />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <SignUpModal isOpen={isSignUpOpen} onClose={handleClose} />
      </Suspense>
    </>
  );
}