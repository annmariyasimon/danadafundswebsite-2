'use client'

import { Mail, Phone, MapPin } from 'lucide-react'

export default function CTA() {
  return (
    <section id="contact" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Ready to Expand Globally?</h2>
            <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
              Let's discuss how North Route Solution can help your institution reach new markets, increase student recruitment, and achieve sustainable growth. Schedule a consultation with our team today.
            </p>

            <div className="space-y-4">
              <div className="flex gap-4 items-start">
                <Mail className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-primary">Email</p>
                  <p className="text-foreground/70">info@northroute.com</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <Phone className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-primary">Phone</p>
                  <p className="text-foreground/70">+91 XXX XXX XXXX</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <MapPin className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-primary">Office</p>
                  <p className="text-foreground/70">India, South Asia</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-background p-8 rounded-xl border border-border/50">
            <h3 className="text-2xl font-bold text-primary mb-6">Get in Touch</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:border-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Institution</label>
                <input
                  type="text"
                  placeholder="Your institution"
                  className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:border-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:border-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                <textarea
                  placeholder="Tell us about your expansion goals..."
                  rows={4}
                  className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:border-primary resize-none"
                />
              </div>
              <button className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
