'use client'

import { Star } from 'lucide-react'

export default function Testimonials() {
  const testimonials = [
    {
      quote: 'North Route Solution transformed our approach to the Indian market. Their in-country expertise and dedicated team resulted in a 300% increase in quality applications within the first year.',
      author: 'Dr. Sarah Mitchell',
      role: 'Director of International Admissions',
      institution: 'European University',
      rating: 5,
    },
    {
      quote: 'The admissions automation platform streamlined our entire recruitment workflow. We went from processing applications manually to having a fully integrated system that connects all stakeholders.',
      author: 'Prof. James Chen',
      role: 'Registrar',
      institution: 'Asian Institute of Technology',
      rating: 5,
    },
    {
      quote: 'What impressed us most was their commitment to our success. They didn\'t just provide services—they became a true extension of our team, understanding our mission and culture.',
      author: 'Dr. Amelia Rodriguez',
      role: 'VP of Global Partnerships',
      institution: 'Latin American University',
      rating: 5,
    },
  ]

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">What Our Partners Say</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Real results from institutions that transformed their global expansion with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-8 bg-card border border-border/50 rounded-xl hover:shadow-lg hover:border-primary/30 transition-all"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>

              <p className="text-foreground/80 mb-6 leading-relaxed italic">
                {`"${testimonial.quote}"`}
              </p>

              <div className="border-t border-border/30 pt-4">
                <p className="font-semibold text-primary">{testimonial.author}</p>
                <p className="text-sm text-foreground/60">{testimonial.role}</p>
                <p className="text-sm text-accent font-medium">{testimonial.institution}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
