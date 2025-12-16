'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { trackNavigation } from '@/lib/analytics';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white/95 backdrop-blur-sm shadow-md fixed top-0 w-full z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg overflow-hidden flex items-center justify-center">
              <Image
                src="/images/logo.png"
                alt="রমজানের প্রস্তুতি"
                width={48}
                height={48}
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" onClick={() => trackNavigation('Home', 'Navbar')} className="text-gray-700 hover:text-emerald-700 font-medium transition-colors">
              হোম
            </Link>
            <Link href="/syllabus" onClick={() => trackNavigation('Syllabus', 'Navbar')} className="text-gray-700 hover:text-emerald-700 font-medium transition-colors">
              সিলেবাস
            </Link>
            <Link href="/teachers" onClick={() => trackNavigation('Teachers', 'Navbar')} className="text-gray-700 hover:text-emerald-700 font-medium transition-colors">
              শিক্ষকবৃন্দ
            </Link>
            <Link href="/about" onClick={() => trackNavigation('About', 'Navbar')} className="text-gray-700 hover:text-emerald-700 font-medium transition-colors">
              সম্পর্কে
            </Link>
            <Link href="/contact" onClick={() => trackNavigation('Contact', 'Navbar')} className="text-gray-700 hover:text-emerald-700 font-medium transition-colors">
              যোগাযোগ
            </Link>
            <Link 
              href="/register"
              onClick={() => trackNavigation('Register', 'Navbar Button')}
              className="bg-emerald-700 hover:bg-emerald-800 text-white px-6 py-2.5 rounded-lg font-semibold transition-all shadow-md hover:shadow-lg"
            >
              রেজিস্ট্রেশন
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-3">
            <Link 
              href="/" 
              className="block text-gray-700 hover:text-emerald-700 font-medium py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors"
              onClick={() => {
                trackNavigation('Home', 'Mobile Menu');
                setIsOpen(false);
              }}
            >
              হোম
            </Link>
            <Link 
              href="/syllabus"
              className="block text-gray-700 hover:text-emerald-700 font-medium py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors"
              onClick={() => {
                trackNavigation('Syllabus', 'Mobile Menu');
                setIsOpen(false);
              }}
            >
              সিলেবাস
            </Link>
            <Link 
              href="/teachers"
              className="block text-gray-700 hover:text-emerald-700 font-medium py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors"
              onClick={() => {
                trackNavigation('Teachers', 'Mobile Menu');
                setIsOpen(false);
              }}
            >
              শিক্ষকবৃন্দ
            </Link>
            <Link 
              href="/about"
              className="block text-gray-700 hover:text-emerald-700 font-medium py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors"
              onClick={() => {
                trackNavigation('About', 'Mobile Menu');
                setIsOpen(false);
              }}
            >
              সম্পর্কে
            </Link>
            <Link 
              href="/contact"
              className="block text-gray-700 hover:text-emerald-700 font-medium py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors"
              onClick={() => {
                trackNavigation('Contact', 'Mobile Menu');
                setIsOpen(false);
              }}
            >
              যোগাযোগ
            </Link>
            <Link 
              href="/register"
              className="block bg-emerald-700 hover:bg-emerald-800 text-white px-4 py-3 rounded-lg font-semibold transition-all text-center"
              onClick={() => {
                trackNavigation('Register', 'Mobile Menu Button');
                setIsOpen(false);
              }}
            >
              রেজিস্ট্রেশন
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
