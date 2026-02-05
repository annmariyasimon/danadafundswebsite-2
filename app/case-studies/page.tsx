'use client'

import Header from '@/components/creative-header'
import Footer from '@/components/footer-creative'
import { TrendingUp } from 'lucide-react'

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      title: 'Global University - 250% Enrollment Growth',
      client: 'Leading Research University, Europe',
      challenge: 'Manual recruitment processes limiting international enrollment capacity',
      solution: 'Implemented automated admissions platform and in-country representation across 5 markets',
      results: ['250% increase in international student enrollment', '60% reduction in admissions processing time', 'Expansion to 8 new markets']
    },
    {
      title: 'Southeast Asian Institution - Market Entry Success',
      client: 'Premier Institution, Southeast Asia',
      challenge: 'Entering South Asian market without local network and knowledge',
      solution: 'Provided comprehensive market entry consulting with partnership development',
      results: ['Successfully entered 3 new markets within 6 months', '500+ qualified student applications year 1', 'Established 20+ institutional partnerships']
    },
    {
      title: 'Tech University - Digital Transformation',
      client: 'Technology-Focused University, Asia',
      challenge: 'Legacy systems causing recruitment bottlenecks and poor student experience',
      solution: 'Complete digital transformation with modern admissions platform and CRM',
      results: ['80% process automation achieved', '3x faster student onboarding', '95% student satisfaction rating']
    },
    {
      title: 'Government Program - Student Mobility Initiative',
      client: 'National Government Education Board',
      challenge: 'Coordinating international student placement across multiple institutions',
      solution: 'Developed unified platform and back-end operations support',
      results: ['100,000+ students processed annually', 'Standardized process across 50+ institutions', '40% reduction in administrative overhead']
    },
    {
      title: 'Private Colleges - Admission Network',
      client: 'Network of Private Colleges, Multiple Countries',
      challenge: 'Fragmented admission processes and limited international visibility',
      solution: 'Centralized admissions hub with integrated digital marketing',
      results: ['35% increase in international applications', 'Unified student experience across network', 'Real-time performance analytics']
    },
    {
      title: 'International Institute - Regional Expansion',
      client: 'Premium International Institution',
      challenge: 'Scaling enrollment while maintaining quality standards',
      solution: 'Strategic market analysis and targeted regional expansion',
      results: ['Entered 5 strategic markets', '180% enrollment growth', 'Maintained academic standards throughout']
    }
  ]

  return (
    <main className="bg-background text-foreground">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 md:py-32 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Case Studies
          </h1>
          <p className="text-lg text-muted-foreground">
            Real-world success stories from institutions we've partnered with
          </p>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto space-y-8">
          {caseStudies.map((study, i) => (
            <div key={i} className="p-8 bg-card rounded-2xl border border-border hover:shadow-lg transition-all group">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">{study.title}</h3>
                  <p className="text-primary font-medium text-sm">{study.client}</p>
                </div>
                <TrendingUp className="w-8 h-8 text-accent flex-shrink-0 group-hover:scale-110 transition-transform" />
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div>
                  <h4 className="text-xs font-bold text-muted-foreground mb-2 uppercase">Challenge</h4>
                  <p className="text-sm text-muted-foreground">{study.challenge}</p>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-muted-foreground mb-2 uppercase">Solution</h4>
                  <p className="text-sm text-muted-foreground">{study.solution}</p>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-muted-foreground mb-2 uppercase">Results</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {study.results.map((result, j) => (
                      <li key={j} className="flex items-start">
                        <span className="text-accent mr-2">✓</span>
                        <span>{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <button className="text-primary font-medium text-sm hover:text-accent transition-colors">
                Read Full Case Study →
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Impact Summary */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Collective Impact</h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: '350+', label: 'Institutions Transformed' },
              { number: '100K+', label: 'Students Connected' },
              { number: '20+', label: 'Countries Served' },
              { number: '500%', label: 'Avg Enrollment Growth' }
            ].map((stat, i) => (
              <div key={i} className="p-6">
                <p className="text-4xl font-bold text-primary mb-2">{stat.number}</p>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
