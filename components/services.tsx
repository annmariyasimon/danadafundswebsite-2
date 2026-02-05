'use client'

import { Building2, Zap, MapPin, BarChart3, Megaphone, Briefcase } from 'lucide-react'

export default function Services() {
  const services = [
    {
      icon: MapPin,
      title: 'In-Country Representation',
      description: 'Dedicated local teams serving as your extension in India, managing partnerships, events, and brand visibility.',
    },
    {
      icon: Zap,
      title: 'Admissions Automation',
      description: 'Centralized CRM with automated workflows for student enquiries, applications, and offer management.',
    },
    {
      icon: Briefcase,
      title: 'Back-End Operations',
      description: 'Complete admissions processing as an extension of your team—from enquiries to enrollment.',
    },
    {
      icon: MapPin,
      title: 'Market Entry & Compliance',
      description: 'Strategic guidance for institutional expansion with regulatory compliance and government liaison.',
    },
    {
      icon: Megaphone,
      title: 'Digital Marketing',
      description: 'Data-driven recruitment campaigns across SEO, SEM, social media, and targeted lead generation.',
    },
    {
      icon: Building2,
      title: 'Government Solutions',
      description: 'Custom programs for ministries, education boards, and bilateral education initiatives.',
    },
  ]

  return (
    <section id="services" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Services</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Comprehensive education consulting solutions tailored to your institution's goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="p-8 bg-card border border-border/50 rounded-xl hover:shadow-lg hover:border-primary/30 transition-all group"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">{service.title}</h3>
                <p className="text-foreground/70 leading-relaxed">{service.description}</p>
                <button className="mt-4 text-accent font-medium text-sm hover:gap-2 inline-flex items-center transition-all">
                  Learn More →
                </button>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
