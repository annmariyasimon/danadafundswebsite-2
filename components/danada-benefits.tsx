'use client';

import { TrendingUp, Award, Clock, BarChart3 } from 'lucide-react';

export default function BenefitsSection() {
  const benefits = [
    {
      icon: TrendingUp,
      title: '95%+ Approval Rate',
      description: 'Industry-leading success rate for visa approvals with our expert guidance'
    },
    {
      icon: Award,
      title: 'Bank Partnerships',
      description: 'Long-term relationships with 50+ leading banks worldwide'
    },
    {
      icon: Clock,
      title: 'Fast Processing',
      description: 'Quick documentation and approval turnaround times'
    },
    {
      icon: BarChart3,
      title: '10,000+ Students',
      description: 'Trusted by thousands of international students globally'
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
