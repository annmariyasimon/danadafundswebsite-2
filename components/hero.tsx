'use client'

import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-primary/10 to-background py-20 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-72 h-72 bg-secondary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6 leading-tight">
          Global Education Solutions for Ambitious Institutions
        </h1>
        
        <p className="text-lg md:text-xl text-foreground/80 mb-8 leading-relaxed max-w-2xl mx-auto">
          We help universities and government education bodies expand their global presence through in-country representation, admissions automation, and strategic market entry solutions.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all hover:shadow-lg">
            Explore Solutions
          </button>
          <button className="border-2 border-primary text-primary px-8 py-4 rounded-lg font-semibold hover:bg-primary/5 transition-colors flex items-center justify-center gap-2">
            Watch Demo
            <ArrowRight size={20} />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 pt-8 border-t border-border/30">
          <div>
            <div className="text-3xl font-bold text-primary mb-2">350+</div>
            <p className="text-sm text-foreground/60">Institutions Partnered</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">20+</div>
            <p className="text-sm text-foreground/60">Countries Served</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">100K+</div>
            <p className="text-sm text-foreground/60">Students Supported</p>
          </div>
        </div>
      </div>
    </section>
  )
}
