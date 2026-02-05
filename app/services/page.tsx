'use client';

import Header from '@/components/danada-header';
import Footer from '@/components/danada-footer';
import { FileText, CheckCircle, DollarSign, Globe, Users, Zap } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: FileText,
      title: 'Balance Confirmation Letters',
      desc: 'High-Approval Documentation',
      details: 'Never worry about your balance. Danada Funds enables finance for balance confirmation letters with our high-approval ranking. We have long-term relationships with leading banks, helping thousands of students find the perfect documentation.',
      benefits: ['Quick turnaround', 'Bank-verified documents', 'Multiple currency support', 'Flexible amounts']
    },
    {
      icon: CheckCircle,
      title: 'Visa Approval Support',
      desc: 'Expert Financial Guidance',
      details: 'When you are making the biggest decision of your life, who you approach matters. Our counsellors are the most well-trained in overseas financial assistance, giving us a high success rate for visa approvals which has become a benchmark for the industry.',
      benefits: ['Expert counselling', 'Visa-ready documentation', 'Document verification', '24/7 support']
    },
    {
      icon: DollarSign,
      title: 'Financial Counselling',
      desc: 'Personalized Guidance',
      details: 'Get expert advice on finding the right financing options tailored to your specific needs and circumstances. Our counsellors understand the nuances of international education financing.',
      benefits: ['Customized plans', 'Career guidance', 'Scholarship hunting', 'EMI calculator']
    },
    {
      icon: Globe,
      title: 'Global Bank Network',
      desc: 'Access to Worldwide Funding',
      details: 'Leverage our extensive network of leading banks across multiple countries to access thousands of funding options and competitive rates.',
      benefits: ['50+ bank partners', 'Competitive rates', 'Multi-country access', 'Real-time updates']
    },
    {
      icon: Users,
      title: 'One-on-One Counselling',
      desc: 'Dedicated Support Staff',
      details: 'Get personalized attention from our team of industry experts who guide you through every step of the overseas education funding process.',
      benefits: ['Dedicated mentor', 'Regular check-ins', 'Quick resolution', 'Personal guidance']
    },
    {
      icon: Zap,
      title: 'Fast Processing',
      desc: 'Rapid Approval Timeline',
      details: 'Quick turnaround on documentation and approvals so you can focus on your education plans without delays.',
      benefits: ['Express processing', 'Real-time tracking', 'Quick approvals', 'No hidden delays']
    }
  ];

  return (
    <main className="bg-background text-foreground">
      <Header />

      {/* Hero */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Our <span className="text-primary">Services</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Comprehensive solutions designed specifically for international students pursuing global education.
          </p>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="bg-white rounded-xl p-8 md:p-12 border border-border">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white flex-shrink-0">
                      <Icon className="w-8 h-8" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-foreground">{service.title}</h2>
                      <p className="text-primary font-semibold">{service.desc}</p>
                    </div>
                  </div>

                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    {service.details}
                  </p>

                  <div>
                    <h3 className="font-bold text-foreground mb-4">Key Benefits:</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {service.benefits.map((benefit, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-primary rounded-full" />
                          <span className="text-muted-foreground">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
