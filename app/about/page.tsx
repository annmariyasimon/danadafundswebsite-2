'use client';

import Header from '@/components/danada-header';
import Footer from '@/components/danada-footer';
import { CheckCircle2 } from 'lucide-react';

export default function About() {
  return (
    <main className="bg-background text-foreground">
      <Header />

      {/* Hero */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            About <span className="text-primary">Danada Funds</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Empowering international students with innovative funding solutions and expert guidance since inception.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-foreground">Our Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                To enable international students to pursue their dreams of global education by providing seamless, transparent, and reliable funding solutions backed by trusted financial institutions.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We believe every deserving student should have access to quality education regardless of geographical or financial boundaries.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6 text-foreground">Our Vision</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                To become the world's most trusted bridge between international students and global education opportunities.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Through innovation and excellence, we aim to make overseas education accessible, affordable, and hassle-free for students worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Transparency', desc: 'Complete honesty in all dealings' },
              { title: 'Excellence', desc: 'Highest quality in service delivery' },
              { title: 'Student-Centric', desc: 'Always putting students first' },
              { title: 'Reliability', desc: 'Trusted partner for global dreams' }
            ].map((value, i) => (
              <div key={i} className="bg-white rounded-lg p-8 border border-border">
                <CheckCircle2 className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-lg font-bold mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Why Choose Danada Funds?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: 'Bank Partnerships', desc: 'Relationships with 50+ leading banks globally' },
              { title: '95%+ Success Rate', desc: 'Industry-leading visa approval rate' },
              { title: 'Expert Counselling', desc: 'Experienced team of financial advisors' },
              { title: 'Fast Processing', desc: 'Quick approvals and documentation' },
              { title: '10,000+ Students', desc: 'Trusted by thousands worldwide' },
              { title: 'Multi-Country Support', desc: 'Expertise across all major study destinations' }
            ].map((item, i) => (
              <div key={i} className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-foreground mb-1">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
