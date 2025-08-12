'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ChevronDownIcon } from 'lucide-react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center gap-1 text-black hover:text-gray-700 transition-colors font-medium">
                Casino Reviews
                <ChevronDownIcon className="w-4 h-4" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="start"
              className="w-56 bg-white rounded-2xl border border-[#E5E7E8] shadow-lg p-2"
              sideOffset={8}
            >
              <DropdownMenuItem asChild className="p-3 hover:bg-gray-50 rounded-xl cursor-pointer transition-colors">
                <a href="#" className="w-full">
                  <span className="text-black font-medium text-base">Online Casinos</span>
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild className="p-3 hover:bg-gray-50 rounded-xl cursor-pointer transition-colors">
                <a href="#" className="w-full">
                  <span className="text-black font-medium text-base">Live Casinos</span>
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild className="p-3 hover:bg-gray-50 rounded-xl cursor-pointer transition-colors">
                <a href="#" className="w-full">
                  <span className="text-black font-medium text-base">Mobile Casinos</span>
                </a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <a href="#" className="text-black hover:text-gray-700 transition-colors font-medium">
            Compare
          </a>

          <a href="#" className="text-black hover:text-gray-700 transition-colors font-medium">
            Expert Guides
          </a>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center gap-1 text-black hover:text-gray-700 transition-colors font-medium">
                Explore
                <ChevronDownIcon className="w-4 h-4" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="start"
              className="w-56 bg-white rounded-2xl border border-[#E5E7E8] shadow-lg p-2"
              sideOffset={8}
            >
              <DropdownMenuItem asChild className="p-3 hover:bg-gray-50 rounded-xl cursor-pointer transition-colors">
                <a href="#" className="w-full">
                  <span className="text-black font-medium text-base">Games</span>
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild className="p-3 hover:bg-gray-50 rounded-xl cursor-pointer transition-colors">
                <a href="#" className="w-full">
                  <span className="text-black font-medium text-base">Bonuses</span>
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild className="p-3 hover:bg-gray-50 rounded-xl cursor-pointer transition-colors">
                <a href="#" className="w-full">
                  <span className="text-black font-medium text-base">Payment Methods</span>
                </a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-6 ml-auto">
          {/* Admin Link */}
          <Link 
            href="/admin" 
            className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-600 hover:text-gray-800 lg:hidden"
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
          <div className="hidden md:block">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
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
                  <ChevronDownIcon className="w-4 h-4 text-gray-500" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="start"
                className="w-56 bg-white rounded-2xl border border-[#E5E7E8] shadow-lg p-2"
                sideOffset={8}
              >
                <DropdownMenuItem asChild className="p-3 hover:bg-gray-50 rounded-xl cursor-pointer transition-colors">
                  <a href="#" className="w-full">
                    <span className="text-black font-medium text-base">United Kingdom</span>
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="p-3 hover:bg-gray-50 rounded-xl cursor-pointer transition-colors">
                  <a href="#" className="w-full">
                    <span className="text-black font-medium text-base">Canada</span>
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="p-3 hover:bg-gray-50 rounded-xl cursor-pointer transition-colors">
                  <a href="#" className="w-full">
                    <span className="text-black font-medium text-base">Australia</span>
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="p-3 hover:bg-gray-50 rounded-xl cursor-pointer transition-colors">
                  <a href="#" className="w-full">
                    <span className="text-black font-medium text-base">Germany</span>
                  </a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
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

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-white z-50 lg:hidden">
          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <Image
                  src="/images/logo.svg"
                  alt="CasinoTop Logo"
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
                <span className="text-xl font-bold text-black">CasinoTop</span>
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-6">
              {/* Quick Access */}
              <div className="mb-8">
                <h3 className="text-base font-normal text-gray-500 uppercase mb-4" style={{
                  fontSize: '16px',
                  lineHeight: '24px',
                  letterSpacing: '0px'
                }}>Quick Access</h3>
                <div className="grid grid-cols-3 gap-2 sm:gap-4">
                  <a href="#" className="flex flex-col items-center justify-center min-w-0 h-[100px] sm:h-[116px] py-3 sm:py-5 px-2 sm:px-4 border border-[#E5E7E8] rounded-md hover:border-gray-300 transition-colors">
                    <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mb-3">
                      <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.286 3.957c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.175 0l-3.37 2.448c-.784.57-1.838-.197-1.539-1.118l1.286-3.957a1 1 0 00-.364-1.118L2.049 8.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.957z"/>
                      </svg>
                    </div>
                    <span className="text-xs sm:text-sm font-medium text-gray-900 text-center">Top Picks</span>
                  </a>

                  <a href="#" className="flex flex-col items-center justify-center min-w-0 h-[100px] sm:h-[116px] py-3 sm:py-5 px-2 sm:px-4 border border-[#E5E7E8] rounded-md hover:border-gray-300 transition-colors">
                    <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mb-3">
                      <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"/>
                      </svg>
                    </div>
                    <span className="text-xs sm:text-sm font-medium text-gray-900 text-center">Compare</span>
                  </a>

                  <a href="#" className="flex flex-col items-center justify-center min-w-0 h-[100px] sm:h-[116px] py-3 sm:py-5 px-2 sm:px-4 border border-[#E5E7E8] rounded-md hover:border-gray-300 transition-colors">
                    <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mb-3">
                      <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                    </div>
                    <span className="text-xs sm:text-sm font-medium text-gray-900 text-center">Ask AI</span>
                  </a>

                  <a href="#" className="flex flex-col items-center justify-center min-w-0 h-[100px] sm:h-[116px] py-3 sm:py-5 px-2 sm:px-4 border border-[#E5E7E8] rounded-md hover:border-gray-300 transition-colors">
                    <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mb-3">
                      <div className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">NEW</div>
                    </div>
                    <span className="text-xs sm:text-sm font-medium text-gray-900 text-center">New Casinos</span>
                  </a>

                  <a href="#" className="flex flex-col items-center justify-center min-w-0 h-[100px] sm:h-[116px] py-3 sm:py-5 px-2 sm:px-4 border border-[#E5E7E8] rounded-md hover:border-gray-300 transition-colors">
                    <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mb-3">
                      <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                      </svg>
                    </div>
                    <span className="text-xs sm:text-sm font-medium text-gray-900 text-center">Legal States</span>
                  </a>

                  <a href="#" className="flex flex-col items-center justify-center min-w-0 h-[100px] sm:h-[116px] py-3 sm:py-5 px-2 sm:px-4 border border-[#E5E7E8] rounded-md hover:border-gray-300 transition-colors">
                    <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mb-3">
                      <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"/>
                      </svg>
                    </div>
                    <span className="text-xs sm:text-sm font-medium text-gray-900 text-center">News</span>
                  </a>
                </div>
              </div>

              {/* Navigation */}
              <div className="mb-8">
                <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-4">Navigation</h3>
                <div className="space-y-1">
                  <a href="#" className="flex items-center justify-between py-4 hover:bg-gray-50 rounded-lg transition-colors">
                    <span className="text-base font-medium text-gray-900">Casino Reviews</span>
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                    </svg>
                  </a>
                  <a href="#" className="flex items-center justify-between py-4 hover:bg-gray-50 rounded-lg transition-colors">
                    <span className="text-base font-medium text-gray-900">Expert Guides</span>
                  </a>
                </div>
              </div>

              {/* Explore */}
              <div className="mb-8">
                <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-4">Explore</h3>
                <div className="space-y-1">
                  <a href="#" className="block py-4 hover:bg-gray-50 rounded-lg transition-colors">
                    <span className="text-base font-medium text-gray-900">About Us</span>
                  </a>
                  <a href="#" className="block  py-4 hover:bg-gray-50 rounded-lg transition-colors">
                    <span className="text-base font-medium text-gray-900">Editorial Policy</span>
                  </a>
                  <a href="#" className="block  py-4 hover:bg-gray-50 rounded-lg transition-colors">
                    <span className="text-base font-medium text-gray-900">Contact</span>
                  </a>
                  <a href="#" className="block  py-4 hover:bg-gray-50 rounded-lg transition-colors">
                    <span className="text-base font-medium text-gray-900">Disclaimer</span>
                  </a>
                  <a href="#" className="block  py-4 hover:bg-gray-50 rounded-lg transition-colors">
                    <span className="text-base font-medium text-gray-900">Responsible Gaming</span>
                  </a>
                </div>
              </div>

              {/* Settings */}
              <div className="mb-8">
                <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-4">Settings</h3>
                <div className="space-y-1">
                  <a href="#" className="flex items-center justify-between py-4 hover:bg-gray-50 rounded-lg transition-colors">
                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                      <span className="text-base font-medium text-gray-900">Country & Language</span>
                    </div>
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
