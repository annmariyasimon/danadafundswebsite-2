'use client';

import { ArrowRight } from 'lucide-react';

export default function ProcessSection() {
  const steps = [
    {
      number: '01',
      title: 'Initial Consultation',
      description: 'Meet with our counsellors to understand your education and funding needs'
    },
    {
      number: '02',
      title: 'Documentation',
      description: 'We help prepare all necessary documents with bank partnerships'
    },
    {
      number: '03',
      title: 'Bank Processing',
      description: 'Our relationships ensure fast-track processing at leading banks'
    },
    {
      number: '04',
      title: 'Approval & Support',
      description: 'Get your funding approved and receive ongoing visa support'
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            How It <span className="text-primary">Works</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A simple, streamlined process from consultation to approval
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Arrow */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 -right-4 text-primary/30">
                  <ArrowRight size={32} />
                </div>
              )}

              {/* Card */}
              <div className="bg-white rounded-xl p-8 border border-border hover:border-primary/50 hover:shadow-lg transition-all">
                <div className="text-4xl font-bold text-primary/20 mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
