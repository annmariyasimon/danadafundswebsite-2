'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-r from-primary via-primary/80 to-secondary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Ready to Fund Your Dreams?
          </h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Start your journey to global education today. Get approved for balance confirmation and visa support.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary rounded-lg font-bold hover:shadow-lg transition-all hover:scale-105"
            >
              Apply Now
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/faq"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white rounded-lg font-bold hover:bg-white/10 transition-all"
            >
              Learn More
            </Link>
          </div>

          {/* Trust Message */}
          <p className="text-sm opacity-75 pt-8">
            Join 10,000+ students who have successfully studied abroad with Danada Funds
          </p>
        </div>
      </div>
    </section>
  );
}
