'use client';

import { FileText, CheckCircle, DollarSign, Globe, Users, Zap } from 'lucide-react';

export default function ServicesSection() {
  const services = [
    {
      icon: FileText,
      title: 'Balance Confirmation Letters',
      description: 'Enabling finance for balance confirmation letters with high-approval ranking. Never worry about your balance again.',
      details: 'Long-term relationships with leading banks ensure seamless documentation process',
      color: 'from-primary to-blue-600'
    },
    {
      icon: CheckCircle,
      title: 'Visa Approval Support',
      description: 'Financial aid and guidance with visa approval. Our well-trained counsellors ensure your documentation is perfect.',
      details: 'Industry benchmark success rate with dedicated support staff',
      color: 'from-secondary to-cyan-600'
    },
    {
      icon: DollarSign,
      title: 'Financial Counselling',
      description: 'Expert guidance on finding the right financing options for your overseas education dreams.',
      details: 'Personalized financial planning tailored to your needs',
      color: 'from-accent to-emerald-600'
    },
    {
      icon: Globe,
      title: 'Global Bank Network',
      description: 'Access to thousands of funding options through our extensive network of leading banks.',
      details: 'Multi-country support with localized expertise',
      color: 'from-primary/80 to-purple-600'
    },
    {
      icon: Users,
      title: 'One-on-One Counselling',
      description: 'Dedicated counsellors to guide you through every step of the overseas education funding process.',
      details: 'Personalized attention from industry experts',
      color: 'from-secondary/80 to-blue-600'
    },
    {
      icon: Zap,
      title: 'Fast Processing',
      description: 'Quick turnaround on documentation and approvals so you can focus on your education plans.',
      details: 'Streamlined process for rapid results',
      color: 'from-accent/80 to-yellow-600'
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive solutions for international students seeking to study abroad
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-xl p-8 border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300"
              >
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-lg bg-gradient-to-br ${service.color} mb-6 text-white group-hover:scale-110 transition-transform`}>
                  <Icon className="w-7 h-7" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {service.description}
                </p>
                <p className="text-sm text-primary font-medium">
                  {service.details}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
