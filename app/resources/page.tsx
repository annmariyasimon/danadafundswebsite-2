'use client'

import Header from '@/components/creative-header'
import Footer from '@/components/footer-creative'
import { FileText, Video, BookOpen, HelpCircle } from 'lucide-react'

export default function ResourcesPage() {
  const resources = {
    guides: [
      { title: 'International Student Recruitment Strategy Guide', downloads: '2.4K' },
      { title: 'Admissions Process Automation Checklist', downloads: '1.8K' },
      { title: 'Market Entry Risk Assessment Framework', downloads: '956' },
      { title: 'Digital Marketing ROI Calculator', downloads: '1.2K' },
      { title: 'Student Success Metrics Playbook', downloads: '743' },
      { title: 'Regional Market Analysis Template', downloads: '1.5K' }
    ],
    videos: [
      { title: 'Introduction to Our Platform', duration: '12:45' },
      { title: 'Case Study: University Growth Story', duration: '18:30' },
      { title: 'Webinar: Future of International Education', duration: '45:20' },
      { title: 'How to Implement Admissions Automation', duration: '22:15' },
      { title: 'Market Entry Strategy Discussion', duration: '33:10' }
    ],
    faqs: [
      {
        question: 'How quickly can we implement your solutions?',
        answer: 'Implementation typically takes 4-8 weeks depending on your institution\'s size and complexity. We provide a detailed timeline during discovery.'
      },
      {
        question: 'What support do you provide post-launch?',
        answer: 'We offer 24/7 technical support, monthly optimization reviews, and quarterly strategy sessions to ensure continuous improvement.'
      },
      {
        question: 'Can your solutions integrate with our existing systems?',
        answer: 'Yes, we support integration with most popular CRM, ERP, and communication platforms. Custom integrations are available upon request.'
      },
      {
        question: 'How do you ensure data security and compliance?',
        answer: 'We maintain SOC 2 Type II compliance, encrypted data transmission, and regular security audits. All data handling follows international standards.'
      },
      {
        question: 'What is the pricing model?',
        answer: 'We offer flexible pricing based on your institution\'s size, services needed, and student volume. Custom packages available.'
      },
      {
        question: 'How can we measure ROI on these solutions?',
        answer: 'We provide comprehensive analytics dashboards tracking enrollment growth, cost reduction, processing time improvements, and student satisfaction.'
      }
    ]
  }

  return (
    <main className="bg-background text-foreground">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 md:py-32 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Resources & Support
          </h1>
          <p className="text-lg text-muted-foreground">
            Guides, templates, and insights to help you succeed
          </p>
        </div>
      </section>

      {/* Guides Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <FileText className="text-primary" size={28} />
            <h2 className="text-3xl font-bold">Guides & Templates</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.guides.map((guide, i) => (
              <div key={i} className="p-6 bg-card rounded-xl border border-border hover:shadow-lg hover:border-primary transition-all group cursor-pointer">
                <div className="flex items-start justify-between mb-4">
                  <FileText className="text-primary group-hover:scale-110 transition-transform" />
                  <span className="text-xs bg-accent/10 text-accent px-2 py-1 rounded">{guide.downloads} downloads</span>
                </div>
                <h3 className="font-bold mb-4 group-hover:text-primary transition-colors">{guide.title}</h3>
                <button className="text-primary text-sm font-medium hover:text-accent transition-colors">Download →</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Videos Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <Video className="text-primary" size={28} />
            <h2 className="text-3xl font-bold">Video Resources</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {resources.videos.map((video, i) => (
              <div key={i} className="p-6 bg-card rounded-xl border border-border hover:shadow-lg transition-all group cursor-pointer">
                <div className="flex items-center justify-between mb-4">
                  <Video className="text-primary group-hover:scale-110 transition-transform" />
                  <span className="text-xs text-muted-foreground">{video.duration}</span>
                </div>
                <h3 className="font-bold mb-4 group-hover:text-primary transition-colors">{video.title}</h3>
                <button className="text-primary text-sm font-medium hover:text-accent transition-colors">Watch →</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <HelpCircle className="text-primary" size={28} />
            <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {resources.faqs.map((faq, i) => (
              <details key={i} className="group p-6 bg-card rounded-xl border border-border hover:shadow-lg transition-shadow cursor-pointer">
                <summary className="flex items-center justify-between font-bold text-lg group-hover:text-primary transition-colors">
                  {faq.question}
                  <span className="text-accent group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-4 text-muted-foreground leading-relaxed">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <BookOpen className="text-primary" size={28} />
            <h2 className="text-3xl font-bold">Latest Insights</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'The Future of International Student Recruitment',
                date: 'Jan 15, 2024',
                excerpt: 'Exploring emerging trends and technologies shaping global education'
              },
              {
                title: '5 Key Metrics Every Institution Should Track',
                date: 'Jan 10, 2024',
                excerpt: 'Data-driven approaches to measuring recruitment and retention success'
              },
              {
                title: 'Market Entry Strategies for Asian Institutions',
                date: 'Jan 5, 2024',
                excerpt: 'Practical insights on expanding to new regions successfully'
              }
            ].map((post, i) => (
              <article key={i} className="p-6 bg-card rounded-xl border border-border hover:shadow-lg transition-all group cursor-pointer">
                <p className="text-xs text-accent mb-3">{post.date}</p>
                <h3 className="font-bold mb-3 group-hover:text-primary transition-colors">{post.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{post.excerpt}</p>
                <a href="#" className="text-primary text-sm font-medium hover:text-accent transition-colors">Read →</a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
