'use client';

import Link from 'next/link';
import { Mail, Phone, MapPin, Linkedin, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                <span className="text-primary font-bold text-lg">DF</span>
              </div>
              <span className="font-bold text-lg">Danada Funds</span>
            </div>
            <p className="text-background/75 leading-relaxed">
              Empowering international students with seamless funding solutions for global education.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-bold text-lg">Quick Links</h4>
            <div className="space-y-2">
              <Link href="/" className="text-background/75 hover:text-background transition-colors">
                Home
              </Link>
              <Link href="/about" className="block text-background/75 hover:text-background transition-colors">
                About
              </Link>
              <Link href="/services" className="block text-background/75 hover:text-background transition-colors">
                Services
              </Link>
              <Link href="/how-it-works" className="block text-background/75 hover:text-background transition-colors">
                How It Works
              </Link>
            </div>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h4 className="font-bold text-lg">Resources</h4>
            <div className="space-y-2">
              <Link href="/success-stories" className="block text-background/75 hover:text-background transition-colors">
                Success Stories
              </Link>
              <Link href="/faq" className="block text-background/75 hover:text-background transition-colors">
                FAQ
              </Link>
              <Link href="/blog" className="block text-background/75 hover:text-background transition-colors">
                Blog
              </Link>
              <Link href="/contact" className="block text-background/75 hover:text-background transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-bold text-lg">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <a href="mailto:info@danadafunds.com" className="text-background/75 hover:text-background transition-colors break-all">
                  info@danadafunds.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary" />
                <a href="tel:+919876543210" className="text-background/75 hover:text-background transition-colors">
                  +91 98765 43210
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <p className="text-background/75">
                  New Delhi, India
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-background/20 py-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-background/75 text-sm">
            © 2024 Danada Financial Services Private Limited. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary/40 transition-colors">
              <Linkedin className="w-5 h-5 text-primary" />
            </a>
            <a href="#" className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary/40 transition-colors">
              <Facebook className="w-5 h-5 text-primary" />
            </a>
            <a href="#" className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary/40 transition-colors">
              <Twitter className="w-5 h-5 text-primary" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
