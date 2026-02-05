'use client'

import Header from '@/components/creative-header'
import Footer from '@/components/footer-creative'
import { Linkedin } from 'lucide-react'

export default function TeamPage() {
  const teamMembers = [
    {
      name: 'Rajesh Kumar',
      role: 'Founder & CEO',
      bio: '20+ years in international education, previously VP at leading education consultancy',
      expertise: 'Strategic Leadership, Market Development'
    },
    {
      name: 'Priya Sharma',
      role: 'Chief Operations Officer',
      bio: 'Expert in process automation and operational efficiency with 15+ years experience',
      expertise: 'Operations, Technology, Process Optimization'
    },
    {
      name: 'Amit Patel',
      role: 'Head of Technology',
      bio: 'Full-stack developer and tech entrepreneur with passion for EdTech solutions',
      expertise: 'Software Development, Platform Architecture'
    },
    {
      name: 'Sarah Chen',
      role: 'Global Partnerships Director',
      bio: 'Deep connections across 20+ countries in education ecosystem',
      expertise: 'Partnerships, Market Expansion, Relationships'
    },
    {
      name: 'Mohammed Hassan',
      role: 'Regional Lead - MENA',
      bio: 'Extensive experience in Middle East education market with strong institutional network',
      expertise: 'Market Intelligence, Regional Development'
    },
    {
      name: 'Emma Rodriguez',
      role: 'Student Success Manager',
      bio: 'Dedicated to ensuring seamless student journey and satisfaction',
      expertise: 'Student Services, Experience Design'
    }
  ]

  return (
    <main className="bg-background text-foreground">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 md:py-32 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Our Team
          </h1>
          <p className="text-lg text-muted-foreground">
            Passionate professionals dedicated to transforming global education
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, i) => (
              <div key={i} className="p-6 bg-card rounded-2xl border border-border hover:shadow-lg transition-all group">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-primary font-medium mb-3 text-sm">{member.role}</p>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{member.bio}</p>
                <div className="flex items-center justify-between">
                  <p className="text-xs text-accent font-medium">{member.expertise}</p>
                  <Linkedin size={16} className="text-muted-foreground hover:text-primary transition-colors cursor-pointer" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Team Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Growing Team</h2>
          <p className="text-muted-foreground mb-8">We're always looking for talented individuals passionate about education transformation</p>
          <button className="px-8 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:shadow-lg transition-all hover:scale-105">
            View Open Positions
          </button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
