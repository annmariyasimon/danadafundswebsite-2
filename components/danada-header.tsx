'use client';

import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:py-6">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <img 
              src="/images/danada-20logo.jpeg" 
              alt="Danada Funds"
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-foreground hover:text-primary transition-colors text-sm font-medium">
              Home
            </Link>
            <Link href="/about" className="text-foreground hover:text-primary transition-colors text-sm font-medium">
              About
            </Link>
            <Link href="/services" className="text-foreground hover:text-primary transition-colors text-sm font-medium">
              Services
            </Link>
            <Link href="/how-it-works" className="text-foreground hover:text-primary transition-colors text-sm font-medium">
              How It Works
            </Link>
            <Link href="/success-stories" className="text-foreground hover:text-primary transition-colors text-sm font-medium">
              Success Stories
            </Link>
            <Link href="/faq" className="text-foreground hover:text-primary transition-colors text-sm font-medium">
              FAQ
            </Link>
            <Link href="/contact" className="text-foreground hover:text-primary transition-colors text-sm font-medium">
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <Link href="/contact" className="hidden md:block px-6 py-2 bg-primary text-primary-foreground rounded-full font-medium text-sm hover:shadow-lg transition-all hover:scale-105">
            Apply Now
          </Link>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden py-4 space-y-3 border-t border-border">
            <Link href="/" className="block text-foreground hover:text-primary text-sm font-medium">
              Home
            </Link>
            <Link href="/about" className="block text-foreground hover:text-primary text-sm font-medium">
              About
            </Link>
            <Link href="/services" className="block text-foreground hover:text-primary text-sm font-medium">
              Services
            </Link>
            <Link href="/how-it-works" className="block text-foreground hover:text-primary text-sm font-medium">
              How It Works
            </Link>
            <Link href="/success-stories" className="block text-foreground hover:text-primary text-sm font-medium">
              Success Stories
            </Link>
            <Link href="/faq" className="block text-foreground hover:text-primary text-sm font-medium">
              FAQ
            </Link>
            <Link href="/contact" className="block text-foreground hover:text-primary text-sm font-medium">
              Contact
            </Link>
            <Link href="/contact" className="w-full block text-center px-6 py-2 bg-primary text-primary-foreground rounded-full font-medium text-sm mt-2">
              Apply Now
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
