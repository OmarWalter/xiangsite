"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import SignUpModal from "../modals/SignUpModal";
import LoginModal from "../modals/LoginModal";

export default function Navbar() {
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [animateLogo, setAnimateLogo] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login state

  // Trigger animation on component mount
  useEffect(() => {
    setAnimateLogo(true); // Start animation
  }, []);

  // Simulate login status check (replace with real auth logic)
  useEffect(() => {
    // Example: Check if user is logged in (e.g., via token in localStorage or auth provider)
    // For demo purposes, this is a placeholder
    const checkLoginStatus = () => {
      // Replace with actual auth check, e.g., localStorage.getItem('token') or auth provider
      setIsLoggedIn(false); // Set to true for testing logged-in state
    };
    checkLoginStatus();
  }, []);

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
                animateLogo ? "animate-logo-move animate-shine" : ""
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
            <button
              type="button"
              onClick={() => setIsLoginOpen(true)}
              className="text-white bg-black/70 hover:bg-white/30 focus:ring-4 focus:outline-none focus:ring-white/50 font-medium rounded-lg text-sm px-4 py-2 text-center transition-colors"
              aria-label="Log in to your account"
            >
              Login
            </button>
            <button
              type="button"
              onClick={() => setIsSignUpOpen(true)}
              className="text-white bg-black/90 hover:bg-white/50 focus:ring-4 focus:outline-none focus:ring-white/50 font-medium rounded-lg text-sm px-4 py-2 text-center transition-colors"
              aria-label="Sign up for a new account"
            >
              SignUp
            </button>
          </div>
        </div>
      </nav>

    
      <SignUpModal isOpen={isSignUpOpen} onClose={() => setIsSignUpOpen(false)} />
      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </>
  );
}