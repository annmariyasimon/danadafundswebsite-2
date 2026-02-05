'use client';

import Header from '@/components/danada-header';
import Footer from '@/components/danada-footer';
import Link from 'next/link';
import { Calendar, User, ArrowRight } from 'lucide-react';

export default function Blog() {
  const posts = [
    {
      id: 1,
      title: '5 Tips to Improve Your Visa Approval Chances',
      excerpt: 'Learn the essential strategies to strengthen your visa application and increase your chances of approval.',
      date: 'Feb 15, 2024',
      author: 'Sarah Johnson',
      category: 'Visa Tips',
      readTime: '5 min read'
    },
    {
      id: 2,
      title: 'Complete Guide to Balance Confirmation Letters',
      excerpt: 'Everything you need to know about balance confirmation letters and how Danada Funds can help you get approved.',
      date: 'Feb 10, 2024',
      author: 'Rajesh Kumar',
      category: 'Documentation',
      readTime: '8 min read'
    },
    {
      id: 3,
      title: 'Top Universities Offering Scholarships for Indian Students',
      excerpt: 'Explore the best universities worldwide that offer generous scholarships and financial aid to Indian students.',
      date: 'Feb 5, 2024',
      author: 'Priya Sharma',
      category: 'Scholarships',
      readTime: '6 min read'
    },
    {
      id: 4,
      title: 'Cost of Living in Popular Study Destinations',
      excerpt: 'A comprehensive breakdown of expenses in USA, UK, Canada, and Australia for international students.',
      date: 'Jan 30, 2024',
      author: 'Arjun Patel',
      category: 'Planning',
      readTime: '10 min read'
    },
    {
      id: 5,
      title: 'Post-Study Work Opportunities Explained',
      excerpt: 'Understanding work permits, visa extensions, and job opportunities after graduation in different countries.',
      date: 'Jan 25, 2024',
      author: 'Aisha Khan',
      category: 'Career',
      readTime: '7 min read'
    },
    {
      id: 6,
      title: 'Financial Planning for Overseas Education',
      excerpt: 'Smart strategies to manage your finances and make overseas education affordable without excessive debt.',
      date: 'Jan 20, 2024',
      author: 'Vikram Desai',
      category: 'Finance',
      readTime: '9 min read'
    }
  ];

  return (
    <main className="bg-background text-foreground">
      <Header />

      {/* Hero */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Danada <span className="text-primary">Blog</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Insights, tips, and guides to help you succeed in your overseas education journey.
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article key={post.id} className="bg-white rounded-xl border border-border overflow-hidden hover:shadow-lg transition-all group">
                {/* Category Badge */}
                <div className="px-6 pt-6">
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full">
                    {post.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h2 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-muted-foreground mb-6 line-clamp-2">
                    {post.excerpt}
                  </p>

                  {/* Meta Info */}
                  <div className="space-y-3 mb-6 pb-6 border-b border-border/50">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <User className="w-4 h-4" />
                      {post.author}
                    </div>
                    <p className="text-xs text-primary font-medium">{post.readTime}</p>
                  </div>

                  {/* Read More */}
                  <button className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-primary via-primary/80 to-secondary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-lg opacity-90 mb-8">Get the latest tips and insights on overseas education delivered to your inbox.</p>
          
          <div className="flex gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-lg bg-white text-foreground focus:outline-none"
            />
            <button className="px-8 py-3 bg-white text-primary font-semibold rounded-lg hover:shadow-lg transition-all">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
