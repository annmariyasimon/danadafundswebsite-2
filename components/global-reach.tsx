'use client';

import { Globe, Users, TrendingUp } from 'lucide-react';

export default function GlobalReach() {
  return (
    <section id="about" className="py-16 md:py-24 px-4 bg-gradient-to-b from-transparent via-secondary/5 to-transparent">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">Our Global Footprint</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A trusted partner for education institutions seeking international expansion
          </p>
        </div>

        {/* Three Pillar Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Pillar 1 */}
          <div className="group">
            <div className="h-full bg-white border border-border rounded-2xl p-8 hover:shadow-xl transition-all duration-300 space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/60 rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                <Globe size={32} />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Present in 20+ Countries</h3>
              <p className="text-muted-foreground leading-relaxed">
                Our network spans across major education markets in Asia, Middle East, Africa, and beyond, ensuring local expertise with global standards.
              </p>
              <ul className="space-y-2 pt-4">
                {['Market Intelligence', 'Local Partnerships', 'Cultural Alignment'].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-foreground">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="group">
            <div className="h-full bg-white border border-border rounded-2xl p-8 hover:shadow-xl transition-all duration-300 space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent/60 rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                <Users size={32} />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Serving 350+ Institutions</h3>
              <p className="text-muted-foreground leading-relaxed">
                From universities to government bodies, we've partnered with leading education providers to transform their international recruitment strategies.
              </p>
              <ul className="space-y-2 pt-4">
                {['Proven Success', 'Scalable Solutions', 'Dedicated Support'].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-foreground">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Pillar 3 */}
          <div className="group">
            <div className="h-full bg-white border border-border rounded-2xl p-8 hover:shadow-xl transition-all duration-300 space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-secondary to-secondary/60 rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                <TrendingUp size={32} />
              </div>
              <h3 className="text-2xl font-bold text-foreground">100K+ Student Success</h3>
              <p className="text-muted-foreground leading-relaxed">
                We've facilitated the enrollment of over 100,000 international students, creating life-changing educational opportunities globally.
              </p>
              <ul className="space-y-2 pt-4">
                {['Data-Driven Insights', 'Quality Assurance', 'Student Success'].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-foreground">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
