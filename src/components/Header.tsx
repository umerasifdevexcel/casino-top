'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

export default function Header() {
  const [isCasinoReviewsOpen, setIsCasinoReviewsOpen] = useState(false);
  const [isExploreOpen, setIsExploreOpen] = useState(false);
  const [isCountryOpen, setIsCountryOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const casinoReviewsRef = useRef<HTMLDivElement>(null);
  const exploreRef = useRef<HTMLDivElement>(null);
  const countryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (casinoReviewsRef.current && !casinoReviewsRef.current.contains(event.target as Node)) {
        setIsCasinoReviewsOpen(false);
      }
      if (exploreRef.current && !exploreRef.current.contains(event.target as Node)) {
        setIsExploreOpen(false);
      }
      if (countryRef.current && !countryRef.current.contains(event.target as Node)) {
        setIsCountryOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 px-2 py-4">
      <div className="max-w-[95%] mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Image
            src="/images/logo.svg"
            alt="CasinoTop Logo"
            width={36}
            height={36}
            className="w-9 h-9"
          />
          <span className="text-2xl font-bold text-black">CasinoTop</span>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8">
          <a href="#" className="text-black hover:text-gray-700 transition-colors font-medium">
            Top Picks
          </a>
          
          <div className="relative" ref={casinoReviewsRef}>
            <button
              onClick={() => setIsCasinoReviewsOpen(!isCasinoReviewsOpen)}
              className="flex items-center gap-1 text-black hover:text-gray-700 transition-colors font-medium"
            >
              Casino Reviews
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {isCasinoReviewsOpen && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg py-2 z-50">
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Online Casinos</a>
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Live Casinos</a>
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Mobile Casinos</a>
              </div>
            )}
          </div>

          <a href="#" className="text-black hover:text-gray-700 transition-colors font-medium">
            Compare
          </a>

          <div className="relative" ref={exploreRef}>
            <button
              onClick={() => setIsExploreOpen(!isExploreOpen)}
              className="flex items-center gap-1 text-black hover:text-gray-700 transition-colors font-medium"
            >
              Explore
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {isExploreOpen && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg py-2 z-50">
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Games</a>
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Bonuses</a>
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Payment Methods</a>
              </div>
            )}
          </div>

          <a href="#" className="text-black hover:text-gray-700 transition-colors font-medium">
            Expert Guides
          </a>
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-6">
          {/* Search Icon */}
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>

          {/* Country Selector */}
          <div className="relative hidden md:block" ref={countryRef}>
            <button
              onClick={() => setIsCountryOpen(!isCountryOpen)}
              className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
            >
              {/* US Flag Icon */}
              <div className="w-5 h-5 rounded-full overflow-hidden">
                <Image
                  src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg"
                  alt="US Flag"
                  width={20}
                  height={20}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-sm font-medium text-gray-900">United States</span>
              <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {isCountryOpen && (
              <div className="absolute top-full right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg py-2 z-50">
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">United Kingdom</a>
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Canada</a>
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Australia</a>
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Germany</a>
              </div>
            )}
          </div>

          {/* CTA Button */}
          <button className="px-6 py-2 bg-white border-2 border-red-600 text-red-600 font-bold rounded-lg hover:bg-red-600 hover:text-white transition-colors hidden md:block">
            See Top Casinos
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden mt-4 pb-4 border-t border-gray-100">
          <nav className="flex flex-col space-y-4 pt-4">
            <a href="#" className="text-black hover:text-gray-700 transition-colors font-medium px-4 py-2">
              Top Picks
            </a>
            <a href="#" className="text-black hover:text-gray-700 transition-colors font-medium px-4 py-2">
              Casino Reviews
            </a>
            <a href="#" className="text-black hover:text-gray-700 transition-colors font-medium px-4 py-2">
              Compare
            </a>
            <a href="#" className="text-black hover:text-gray-700 transition-colors font-medium px-4 py-2">
              Explore
            </a>
            <a href="#" className="text-black hover:text-gray-700 transition-colors font-medium px-4 py-2">
              Expert Guides
            </a>
            <div className="pt-4 border-t border-gray-100">
              <button className="w-full px-4 py-2 bg-white border-2 border-red-600 text-red-600 font-bold rounded-lg hover:bg-red-600 hover:text-white transition-colors">
                See Top Casinos
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
