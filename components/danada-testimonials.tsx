'use client';

import { Star } from 'lucide-react';

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Priya Sharma',
      country: 'India',
      university: 'University of Toronto',
      rating: 5,
      quote: 'Danada Funds made the entire process so smooth. My balance confirmation letter was approved within days, and the visa support was invaluable.'
    },
    {
      name: 'Arjun Patel',
      country: 'India',
      university: 'MIT',
      rating: 5,
      quote: 'The expertise of their counsellors and the relationships they have with banks really made a difference. Highly recommended for any international student.'
    },
    {
      name: 'Aisha Khan',
      country: 'Pakistan',
      university: 'Oxford University',
      rating: 5,
      quote: 'Professional, efficient, and supportive. Danada Funds handled everything with precision. My visa was approved on the first attempt.'
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Student <span className="text-primary">Success Stories</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Hear from students who successfully studied abroad with Danada Funds
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 border border-border hover:shadow-lg transition-all"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array(testimonial.rating).fill(0).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-foreground mb-6 leading-relaxed italic">
                {`"${testimonial.quote}"`}
              </p>

              {/* Author */}
              <div className="border-t border-border/50 pt-6">
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.country} • {testimonial.university}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
