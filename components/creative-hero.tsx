'use client';

import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden py-16 md:py-32 px-4">
      {/* Background gradient decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
                Elevate Your Global <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Education Reach</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Partner with North Route Solution to unlock international markets, automate admissions, and accelerate student growth across borders.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="space-y-1">
                <p className="text-3xl font-bold text-primary">350+</p>
                <p className="text-sm text-muted-foreground">Institutions</p>
              </div>
              <div className="space-y-1">
                <p className="text-3xl font-bold text-accent">20+</p>
                <p className="text-sm text-muted-foreground">Countries</p>
              </div>
              <div className="space-y-1">
                <p className="text-3xl font-bold text-secondary">100K+</p>
                <p className="text-sm text-muted-foreground">Students</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="px-8 py-3 bg-primary text-primary-foreground rounded-full font-semibold flex items-center justify-center gap-2 hover:shadow-lg hover:scale-105 transition-all">
                Start Your Journey
                <ArrowRight size={20} />
              </button>
              <button className="px-8 py-3 border-2 border-primary text-primary rounded-full font-semibold hover:bg-primary/5 transition-colors">
                Watch Demo
              </button>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative h-96 md:h-full">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/20 rounded-2xl blur-2xl"></div>
            <div className="relative bg-white/50 backdrop-blur-sm rounded-2xl border border-white/50 h-full flex flex-col items-center justify-center p-8 space-y-6">
              <div className="space-y-3 text-center">
                <h3 className="text-3xl font-bold text-foreground">Global Expansion Made Simple</h3>
                <p className="text-muted-foreground">End-to-end solutions for education institutions</p>
              </div>
              
              <div className="space-y-2 w-full">
                {['Market Research', 'Student Recruitment', 'Admissions Automation', 'In-Country Support'].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 bg-white/50 rounded-lg">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm font-medium text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
