"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { navLinks, colors } from "@/constants";
import Logo from "./Logo";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Mock auth state
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={`w-full transition-all fixed bg-[#722F37] top-0 left-0 right-0 z-50 duration-300 ${
        isScrolled ? 'shadow-lg' : ''
      }`} 
      style={{ 
        backgroundColor: isScrolled ? colors.bordo : '#722F37'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 backdrop-blur-sm  sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors duration-200 hover:opacity-80 font-medium"
                style={{ color: colors.cream }}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* User Icon */}
          <div className="flex items-center">
            <div className="relative">
              <button
                className="p-2 rounded-full transition-colors duration-200 hover:opacity-80"
                style={{ backgroundColor: colors.cream }}
                onClick={() => {
                  // Handle user menu click
                  if (isLoggedIn) {
                    // Navigate to dashboard
                    console.log("Navigate to dashboard");
                  } else {
                    // Open sign-in/up modal
                    console.log("Open sign-in/up");
                  }
                }}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  style={{ color: colors.bordo }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md transition-colors duration-200"
              style={{ color: colors.cream }}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 hover:opacity-80"
                  style={{ color: colors.cream }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
