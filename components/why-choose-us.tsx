'use client'

import { CheckCircle2, Globe, Users, TrendingUp } from 'lucide-react'

export default function WhyChooseUs() {
  const benefits = [
    {
      icon: Globe,
      title: 'Global Expertise, Local Knowledge',
      description: 'Deep understanding of diverse markets across Asia, with on-ground teams in key regions.',
    },
    {
      icon: Users,
      title: 'Dedicated Partner Support',
      description: 'Assigned teams work exclusively with you, ensuring personalized attention and results.',
    },
    {
      icon: TrendingUp,
      title: 'Proven Track Record',
      description: 'Consistent year-over-year growth for our partners with measurable ROI.',
    },
    {
      icon: CheckCircle2,
      title: 'End-to-End Solutions',
      description: 'From market entry strategy to student recruitment and enrollment—we handle it all.',
    },
  ]

  return (
    <section id="why-us" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Why Choose North Route Solution</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Partner with education experts who understand your challenges and deliver measurable results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <div
                key={index}
                className="p-8 bg-background rounded-xl border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">{benefit.title}</h3>
                <p className="text-foreground/70">{benefit.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
