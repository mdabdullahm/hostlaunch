"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Rocket, ChevronRight } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Review', href: '/review' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Features', href: '/features' },
    { name: 'Guides', href: '/guides' },
    { name: 'Contact', href: '/contact' },
    { name: 'Faq', href: '/#' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-black">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="p-2 bg-brand rounded-xl group-hover:rotate-12 transition-transform duration-300">
                <Rocket className="w-6 h-6 text-white" />
              </div>
              <span className="text-5xl font-light tracking-tighter text-gray-900">
                Host<span className="text-brand">Launch</span>
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="px-4 py-2 text-xl font-semibold text-gray-600 hover:text-brand hover:bg-brand-light rounded-lg transition-all duration-200"
              >
                {link.name}
              </Link>
            ))}
            <div className="ml-4 pl-4 border-l border-gray-100">
              <Link
                href="/get-started"
                className="flex items-center gap-2 bg-brand text-white px-6 py-2.5 rounded-full font-bold hover:bg-brand-dark transition-all shadow-md hover:shadow-brand/20 active:scale-95"
              >
                Get Started
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-200 shadow-2xl animate-in slide-in-from-top-5 duration-300">
          <div className="px-4 py-6 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 text-lg font-semibold text-gray-700 hover:text-brand hover:bg-brand-light rounded-xl transition-all"
              >
                {link.name}
              </Link>
            ))}
            <div className="mt-6 px-4">
              <Link
                href="/get-started"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 w-full bg-brand text-white px-6 py-4 rounded-xl font-bold text-lg"
              >
                Get Started
                <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;