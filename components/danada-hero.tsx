'use client';

import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-br from-primary/5 via-background to-secondary/5 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Your Gateway to <span className="text-primary">Global Education</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Danada Funds empowers international students with seamless funding solutions, from balance confirmation letters to visa-approved financial guidance.
              </p>
            </div>

            {/* Key points */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                <span className="text-foreground font-medium">High-approval balance confirmation letters</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                <span className="text-foreground font-medium">Expert visa approval guidance</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                <span className="text-foreground font-medium">Relationships with leading banks</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex gap-4 pt-4">
              <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-lg transition-all hover:scale-105">
                Apply Now
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/services" className="inline-flex items-center gap-2 px-8 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/5 transition-all">
                Learn More
              </Link>
            </div>

            {/* Trust badges */}
            <div className="flex items-center gap-6 pt-8 border-t border-border/50">
              <div className="text-center">
                <p className="text-2xl font-bold text-primary">95%+</p>
                <p className="text-sm text-muted-foreground">Visa Approval Rate</p>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="text-center">
                <p className="text-2xl font-bold text-primary">10K+</p>
                <p className="text-sm text-muted-foreground">Students Funded</p>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="text-center">
                <p className="text-2xl font-bold text-primary">50+</p>
                <p className="text-sm text-muted-foreground">Bank Partners</p>
              </div>
            </div>
          </div>

          {/* Right side - Visual */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl blur-2xl" />
            <div className="relative bg-white/50 backdrop-blur-xl rounded-2xl p-8 border border-primary/20 shadow-xl">
              <div className="space-y-6">
                <div className="flex gap-4 p-4 bg-primary/5 rounded-lg border border-primary/10">
                  <div className="w-12 h-12 bg-primary rounded-lg flex-shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-foreground">Balance Confirmation</p>
                    <p className="text-xs text-muted-foreground">High-approval documentation</p>
                  </div>
                </div>
                <div className="flex gap-4 p-4 bg-secondary/5 rounded-lg border border-secondary/10">
                  <div className="w-12 h-12 bg-secondary rounded-lg flex-shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-foreground">Visa Approval Support</p>
                    <p className="text-xs text-muted-foreground">Expert counselling & guidance</p>
                  </div>
                </div>
                <div className="flex gap-4 p-4 bg-accent/5 rounded-lg border border-accent/10">
                  <div className="w-12 h-12 bg-accent rounded-lg flex-shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-foreground">Financial Assistance</p>
                    <p className="text-xs text-muted-foreground">Customized funding solutions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
