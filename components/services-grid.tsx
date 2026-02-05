'use client';

import { Zap, BarChart3, Headphones, Globe2, Megaphone, Building2 } from 'lucide-react';

const services = [
  {
    icon: Globe2,
    title: 'In-Country Representation',
    description: 'Establish a local presence with dedicated teams on ground in key markets to manage student support and operations.',
    color: 'from-primary'
  },
  {
    icon: Zap,
    title: 'Admissions Automation',
    description: 'Streamline your admissions pipeline with intelligent automation, reducing processing time and improving student experience.',
    color: 'from-accent'
  },
  {
    icon: BarChart3,
    title: 'Back-End Operations',
    description: 'Complete operational support including enrollment management, analytics, and compliance across multiple markets.',
    color: 'from-secondary'
  },
  {
    icon: Globe2,
    title: 'Market Entry Consulting',
    description: 'Strategic guidance for entering new education markets, including market research, partnerships, and regulatory navigation.',
    color: 'from-primary'
  },
  {
    icon: Megaphone,
    title: 'Digital Marketing',
    description: 'Targeted campaigns to build awareness and attract qualified students in your target geographic regions.',
    color: 'from-accent'
  },
  {
    icon: Building2,
    title: 'Government Relations',
    description: 'Navigate complex government requirements and build strategic relationships with education authorities.',
    color: 'from-secondary'
  }
];

export default function ServicesGrid() {
  return (
    <section id="services" className="py-16 md:py-24 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">Comprehensive Solutions</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need for international education expansion in one integrated platform
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div
                key={idx}
                className="group relative overflow-hidden bg-white border border-border rounded-xl p-8 hover:shadow-xl transition-all duration-300"
              >
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} to-transparent opacity-0 group-hover:opacity-5 transition-opacity duration-300 -z-10`}></div>

                {/* Icon */}
                <div className={`w-14 h-14 bg-gradient-to-br ${service.color} to-transparent rounded-lg flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon size={28} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{service.description}</p>

                {/* Accent line */}
                <div className="h-1 w-8 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
