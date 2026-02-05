'use client';

import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Dr. Sarah Chen',
    title: 'Vice President, Global Admissions',
    institution: 'International University Network',
    quote: 'North Route Solution transformed our international recruitment strategy. We saw a 150% increase in qualified student applications within the first year.',
    rating: 5
  },
  {
    name: 'James Mitchell',
    title: 'Director of Enrollment',
    institution: 'Asia Pacific Education Group',
    quote: 'Their admissions automation system cut our processing time in half while improving accuracy. It\'s been game-changing for our operations.',
    rating: 5
  },
  {
    name: 'Prof. Amara Okonkwo',
    title: 'Dean of International Affairs',
    institution: 'Pan-African University Consortium',
    quote: 'The in-country representation team provided invaluable local insights. We successfully entered three new markets without any regional missteps.',
    rating: 5
  }
];

export default function TestimonialsSection() {
  return (
    <section className="py-16 md:py-24 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">What Our Partners Say</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Trusted by leading education institutions worldwide
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="group relative bg-white border border-border rounded-xl p-8 hover:shadow-xl transition-all duration-300 space-y-6"
            >
              {/* Background accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Rating */}
              <div className="flex gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="fill-accent text-accent"
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-lg text-foreground leading-relaxed relative z-10">
                <span className="text-4xl text-primary/30 leading-none">"</span>
                {testimonial.quote}
                <span className="text-4xl text-primary/30 leading-none">"</span>
              </blockquote>

              {/* Author */}
              <div className="space-y-1 border-t border-border pt-6 relative z-10">
                <p className="font-bold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                <p className="text-sm text-accent font-medium">{testimonial.institution}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
