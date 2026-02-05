'use client'

import Header from '@/components/danada-header'
import HeroSection from '@/components/danada-hero'
import ServicesSection from '@/components/danada-services'
import BenefitsSection from '@/components/danada-benefits'
import ProcessSection from '@/components/danada-process'
import TestimonialsSection from '@/components/danada-testimonials'
import CTASection from '@/components/danada-cta'
import Footer from '@/components/danada-footer'

export default function Home() {
  return (
    <main className="bg-background text-foreground">
      <Header />
      <HeroSection />
      <ServicesSection />
      <BenefitsSection />
      <ProcessSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </main>
  )
}
