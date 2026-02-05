'use client';

import Header from '@/components/danada-header';
import Footer from '@/components/danada-footer';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'What is a balance confirmation letter?',
      answer: 'A balance confirmation letter is a formal document from a bank verifying that you have sufficient funds to support your education and living expenses abroad. It is a crucial requirement for most student visa applications.'
    },
    {
      question: 'How long does the process take?',
      answer: 'Typically, the process takes 2-4 weeks from initial consultation to approval. The timeline depends on document readiness and bank processing times. We provide real-time updates throughout.'
    },
    {
      question: 'What is the approval rate?',
      answer: 'Danada Funds has a 95%+ visa approval rate, which is an industry benchmark. Our expertise and relationships with banks ensure high success rates.'
    },
    {
      question: 'How much funding can I get?',
      answer: 'Funding amounts depend on your chosen university, program, country, and personal circumstances. We work with 50+ bank partners offering flexible amounts starting from 20 Lakhs to 1 Crore+.'
    },
    {
      question: 'What documents are required?',
      answer: 'Basic documents include: Educational certificates, Passport, Bank statements, Income documents, University admission letter, and English proficiency scores. We provide a complete checklist during consultation.'
    },
    {
      question: 'Do I need a guarantor?',
      answer: 'Requirements vary by bank and loan amount. Some loans require a co-applicant/guarantor, while others do not. We help identify the best options for your situation.'
    },
    {
      question: 'What are the interest rates?',
      answer: 'Interest rates vary by bank (typically 7-12% per annum) and depend on loan amount, duration, and your profile. We help negotiate competitive rates through our bank relationships.'
    },
    {
      question: 'Can international students apply?',
      answer: 'Yes, but the process varies by destination country. Most banks support students going to USA, UK, Canada, Australia, and other popular destinations. We also support emerging options like Singapore, UAE, etc.'
    },
    {
      question: 'Is there any hidden charges?',
      answer: 'No. We believe in complete transparency. All costs are disclosed upfront. Our service fee varies based on loan amount and complexity, but we have no hidden charges.'
    },
    {
      question: 'What if my application is rejected?',
      answer: 'We work with you to understand rejection reasons and reapply with other bank partners. Our success rate means rejections are rare, but we have contingency options.'
    }
  ];

  return (
    <main className="bg-background text-foreground">
      <Header />

      {/* Hero */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Frequently Asked <span className="text-primary">Questions</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Find answers to common questions about our services and process.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-lg border border-border overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-8 py-6 flex items-center justify-between hover:bg-primary/5 transition-colors"
                >
                  <h3 className="font-bold text-foreground text-lg text-left">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    className={`w-6 h-6 text-primary flex-shrink-0 transition-transform ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {openIndex === index && (
                  <div className="px-8 py-6 bg-primary/5 border-t border-border">
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
