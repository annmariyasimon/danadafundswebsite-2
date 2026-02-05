'use client';

import React from "react"

import { ArrowRight, Mail, Phone, MapPin } from 'lucide-react';
import { useState } from 'react';

export default function CTASection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    institution: '',
    country: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', institution: '', country: '', message: '' });
  };

  return (
    <section id="contact" className="py-16 md:py-24 px-4 bg-gradient-to-b from-transparent via-primary/5 to-transparent">
      <div className="max-w-7xl mx-auto">
        {/* Main CTA Section */}
        <div className="bg-gradient-to-br from-primary via-primary/90 to-accent rounded-2xl md:rounded-3xl p-8 md:p-16 mb-16 text-white relative overflow-hidden">
          {/* Background elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -z-10"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -z-10"></div>

          <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
            {/* Left Content */}
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">Ready to Transform Your Education Institution?</h2>
              <p className="text-lg text-white/90 leading-relaxed">
                Join hundreds of successful education providers who have scaled internationally with North Route Solution.
              </p>
              
              <div className="space-y-4 pt-4">
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-sm font-bold">✓</span>
                  </div>
                  <span>Expert guidance from industry veterans</span>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-sm font-bold">✓</span>
                  </div>
                  <span>Proven track record with 350+ partners</span>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-sm font-bold">✓</span>
                  </div>
                  <span>24/7 dedicated support team</span>
                </div>
              </div>
            </div>

            {/* Right CTA */}
            <div className="space-y-4">
              <button className="w-full bg-white text-primary px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 hover:shadow-xl hover:scale-105 transition-all">
                Schedule a Consultation
                <ArrowRight size={24} />
              </button>
              <p className="text-center text-white/80 text-sm">Free 30-minute strategy call</p>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground">Get in Touch</h3>
            
            <div className="space-y-4">
              <div className="flex gap-4">
                <Mail className="text-primary flex-shrink-0" size={24} />
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-semibold text-foreground">hello@northroute.com</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Phone className="text-accent flex-shrink-0" size={24} />
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="font-semibold text-foreground">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex gap-4">
                <MapPin className="text-secondary flex-shrink-0" size={24} />
                <div>
                  <p className="text-sm text-muted-foreground">Offices</p>
                  <p className="font-semibold text-foreground">Asia, Europe, Americas</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="md:col-span-2 bg-white border border-border rounded-xl p-8 space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
              />
              <input
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Institution Name"
                value={formData.institution}
                onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                className="px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
              />
              <input
                type="text"
                placeholder="Country"
                value={formData.country}
                onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                className="px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
              />
            </div>

            <textarea
              placeholder="Tell us about your goals..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              rows={4}
              className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground resize-none"
            ></textarea>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-lg transition-all"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
