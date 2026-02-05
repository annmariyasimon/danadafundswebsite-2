'use client';

import { Search, Rocket, Users, BarChart3 } from 'lucide-react';

const steps = [
  {
    icon: Search,
    number: '01',
    title: 'Market Research',
    description: 'Deep analysis of your target markets, competitor landscape, and growth opportunities',
    color: 'from-primary'
  },
  {
    icon: Rocket,
    number: '02',
    title: 'Fast Execution',
    description: 'Rapid deployment of strategies with agile implementation and continuous optimization',
    color: 'from-accent'
  },
  {
    icon: Users,
    number: '03',
    title: 'Student Acquisition',
    description: 'End-to-end recruitment with quality assurance and dedicated student support',
    color: 'from-secondary'
  },
  {
    icon: BarChart3,
    number: '04',
    title: 'Analytics & Growth',
    description: 'Real-time insights and performance metrics to drive continuous improvement',
    color: 'from-primary'
  }
];

export default function ProcessFlow() {
  return (
    <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-secondary/5 to-transparent">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">Our Proven Process</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A structured approach to international education expansion success
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-4">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div key={idx} className="relative">
                {/* Connector line */}
                {idx < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-24 left-[calc(100%+12px)] w-[calc(100%-24px)] h-0.5 bg-gradient-to-r from-primary/50 to-transparent"></div>
                )}

                {/* Card */}
                <div className="h-full bg-white border border-border rounded-xl p-8 hover:shadow-lg transition-all duration-300 space-y-4">
                  {/* Step Number */}
                  <span className="text-6xl font-bold text-muted/20">{step.number}</span>

                  {/* Icon */}
                  <div className={`w-12 h-12 bg-gradient-to-br ${step.color} to-transparent rounded-lg flex items-center justify-center text-white -mt-8`}>
                    <Icon size={24} />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-foreground">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <button className="px-8 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all">
            Explore Our Methodology
          </button>
        </div>
      </div>
    </section>
  );
}
