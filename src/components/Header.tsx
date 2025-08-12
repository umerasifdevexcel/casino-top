'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

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
      <div className="max-w-[95%] mx-auto flex items-center">
        {/* Logo */}
        <div className="flex items-center gap-3 mr-12">
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
        <nav className="hidden lg:flex items-center gap-8 flex-1">
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
        <div className="flex items-center gap-6 ml-auto">
          {/* Admin Link */}
          <Link 
            href="/admin" 
            className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-600 hover:text-gray-800"
            title="Admin Dashboard"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </Link>

          {/* Search Icon */}
          <Button variant="headerSearch" size="headerIcon">
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </Button>

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
          <Button variant="casinoOutline" size="headerCta" className="hidden md:block rounded-lg">
            See Top Casinos
          </Button>

          {/* Mobile Menu Button */}
          <Button
            variant="headerSearch"
            size="headerIcon"
            className="lg:hidden rounded-lg"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </Button>
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
            <Link href="/admin" className="text-black hover:text-gray-700 transition-colors font-medium px-4 py-2">
              Admin
            </Link>
            <div className="pt-4 border-t border-gray-100">
              <Button variant="casinoOutline" size="headerCta" className="w-full rounded-lg">
                See Top Casinos
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
