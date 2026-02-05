'use client'

import { Lightbulb, Zap, Target, BarChart3 } from 'lucide-react'

export default function Solutions() {
  const solutions = [
    {
      number: '01',
      title: 'Market Research & Strategy',
      description: 'Comprehensive market analysis with customized entry strategies and risk assessments.',
      icon: Lightbulb,
    },
    {
      number: '02',
      title: 'Fast Execution',
      description: 'Rapid team recruitment and infrastructure setup to get you market-ready in weeks, not months.',
      icon: Zap,
    },
    {
      number: '03',
      title: 'Student Acquisition',
      description: 'Multi-channel recruitment campaigns delivering high-quality student leads and conversions.',
      icon: Target,
    },
    {
      number: '04',
      title: 'Performance Analytics',
      description: 'Real-time reporting and insights to track ROI and optimize your expansion strategy.',
      icon: BarChart3,
    },
  ]

  return (
    <section id="solutions" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Solutions Framework</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            A structured approach to your global expansion journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {solutions.map((solution, index) => {
            const Icon = solution.icon
            return (
              <div key={index} className="flex gap-6 p-8 bg-background rounded-xl border border-border/50 hover:border-accent/30 hover:shadow-lg transition-all">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-14 w-14 rounded-lg bg-accent/20">
                    <Icon className="h-6 w-6 text-accent" />
                  </div>
                </div>
                <div>
                  <div className="text-sm font-bold text-accent/60 mb-1">{solution.number}</div>
                  <h3 className="text-xl font-bold text-primary mb-2">{solution.title}</h3>
                  <p className="text-foreground/70">{solution.description}</p>
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-12 p-8 bg-primary/5 border border-primary/10 rounded-xl">
          <p className="text-lg text-foreground leading-relaxed">
            <span className="font-semibold text-primary">Our proven methodology</span> ensures you navigate market complexities while maintaining focus on your core mission—delivering excellent education. We handle the operational heavy lifting so you can focus on academic excellence.
          </p>
        </div>
      </div>
    </section>
  )
}
