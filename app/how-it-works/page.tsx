'use client';

import Header from '@/components/danada-header';
import Footer from '@/components/danada-footer';
import { ArrowDown } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      title: 'Initial Consultation',
      description: 'Schedule a free consultation with our counsellors to discuss your education plans, target universities, and funding requirements.',
      details: ['Understand your needs', 'Assess financial requirements', 'Explore options', 'Timeline planning']
    },
    {
      title: 'Document Preparation',
      description: 'We help you prepare all necessary documents with guidance from our team. Our relationships with banks ensure smooth processing.',
      details: ['Document checklist', 'Bank coordination', 'Quality verification', 'Completeness check']
    },
    {
      title: 'Bank Processing',
      description: 'Your application goes through our bank partners with priority processing. Our long-term relationships ensure fast-track handling.',
      details: ['Priority processing', 'Bank liaison', 'Real-time updates', 'Quick approvals']
    },
    {
      title: 'Approval & Disbursement',
      description: 'Receive your balance confirmation letter and funding approval. We provide ongoing visa support throughout the process.',
      details: ['Official approval', 'Document delivery', 'Visa support', 'Ongoing guidance']
    }
  ];

  return (
    <main className="bg-background text-foreground">
      <Header />

      {/* Hero */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            How <span className="text-primary">It Works</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            A simple, transparent 4-step process from consultation to approval.
          </p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {steps.map((step, index) => (
            <div key={index}>
              <div className="bg-white rounded-xl p-8 border border-border">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white font-bold text-lg">
                      {index + 1}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-foreground mb-3">
                      {step.title}
                    </h2>
                    <p className="text-lg text-muted-foreground mb-6">
                      {step.description}
                    </p>
                    <div className="grid grid-cols-2 gap-3">
                      {step.details.map((detail, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                          <span className="text-muted-foreground text-sm">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {index < steps.length - 1 && (
                <div className="flex justify-center py-8">
                  <ArrowDown className="w-6 h-6 text-primary/50" />
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Expected Timeline</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { phase: 'Week 1-2', activity: 'Consultation & Documentation' },
              { phase: 'Week 2-3', activity: 'Bank Submission' },
              { phase: 'Week 3-4', activity: 'Processing & Verification' },
              { phase: 'Week 4-5', activity: 'Approval & Delivery' }
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-lg p-6 text-center border border-border">
                <p className="text-primary font-bold text-lg mb-2">{item.phase}</p>
                <p className="text-muted-foreground">{item.activity}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
