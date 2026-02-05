'use client'

import Link from 'next/link'
import { Facebook, Linkedin as LinkedIn, Twitter, Mail } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    Services: [
      { label: 'In-Country Representation', href: '#' },
      { label: 'Admissions Automation', href: '#' },
      { label: 'Back-End Operations', href: '#' },
      { label: 'Digital Marketing', href: '#' },
    ],
    Company: [
      { label: 'About Us', href: '#' },
      { label: 'Our Team', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Blog', href: '#' },
    ],
    Resources: [
      { label: 'Case Studies', href: '#' },
      { label: 'Research Reports', href: '#' },
      { label: 'Documentation', href: '#' },
      { label: 'Contact Us', href: '#' },
    ],
  }

  const socialLinks = [
    { icon: LinkedIn, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Mail, href: 'mailto:info@northroute.com', label: 'Email' },
  ]

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary-foreground/20 flex items-center justify-center font-bold text-lg">
                NR
              </div>
              <div>
                <h3 className="font-bold">North Route</h3>
                <p className="text-xs opacity-80">Solution</p>
              </div>
            </div>
            <p className="text-sm opacity-80">Global education consulting for ambitious institutions.</p>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold mb-4 text-white">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm opacity-80">
              © {currentYear} North Route Solution. All rights reserved.
            </p>

            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <Link
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 rounded-lg bg-primary-foreground/20 flex items-center justify-center hover:bg-primary-foreground/30 transition-colors"
                    aria-label={social.label}
                  >
                    <Icon size={20} />
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
