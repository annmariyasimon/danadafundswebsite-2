'use client';

import Header from '@/components/danada-header';
import Footer from '@/components/danada-footer';
import { Award, TrendingUp } from 'lucide-react';

export default function SuccessStories() {
  const stories = [
    {
      name: 'Priya Sharma',
      from: 'Mumbai, India',
      university: 'University of Toronto',
      country: 'Canada',
      program: 'Computer Science (MS)',
      quote: 'Danada Funds made my dream possible. The balance confirmation was approved within days!',
      stats: ['50 Lakhs funding', '95% approval rate', '2 weeks processing'],
      achievement: 'Successfully admitted and currently in second semester'
    },
    {
      name: 'Arjun Patel',
      from: 'Ahmedabad, India',
      university: 'MIT',
      country: 'USA',
      program: 'Robotics (MS)',
      quote: 'The expertise was invaluable. My visa was approved on the first attempt.',
      stats: ['75 Lakhs funding', '100% visa success', '3 weeks processing'],
      achievement: 'Top performer in cohort, internship offer from leading tech company'
    },
    {
      name: 'Aisha Khan',
      from: 'Karachi, Pakistan',
      university: 'Oxford University',
      country: 'UK',
      program: 'Business Administration (MBA)',
      quote: 'Professional, efficient, and supportive. Highly recommended!',
      stats: ['60 Lakhs funding', '98% approval rate', '2.5 weeks processing'],
      achievement: 'Pursuing MBA with full academic scholarship'
    },
    {
      name: 'Rajesh Kumar',
      from: 'Bangalore, India',
      university: 'University of Melbourne',
      country: 'Australia',
      program: 'Engineering (Master\'s)',
      quote: 'The counselling was personalized and practical. Made everything clear.',
      stats: ['45 Lakhs funding', '97% approval rate', '3 weeks processing'],
      achievement: 'Secured internship at multinational company'
    },
    {
      name: 'Neha Singh',
      from: 'Delhi, India',
      university: 'NUS',
      country: 'Singapore',
      program: 'Finance (Master\'s)',
      quote: 'Fast processing and transparent communication throughout.',
      stats: ['55 Lakhs funding', '99% approval rate', '2 weeks processing'],
      achievement: 'Completed degree, working at top financial institution'
    },
    {
      name: 'Vikram Desai',
      from: 'Pune, India',
      university: 'ETH Zurich',
      country: 'Switzerland',
      program: 'Physics (PhD)',
      quote: 'Best decision I made for my education journey.',
      stats: ['80 Lakhs funding', '95% approval rate', '4 weeks processing'],
      achievement: 'Research scholar in one of world\'s top universities'
    }
  ];

  return (
    <main className="bg-background text-foreground">
      <Header />

      {/* Hero */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Student <span className="text-primary">Success Stories</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Hear from students who successfully studied abroad with Danada Funds support.
          </p>
        </div>
      </section>

      {/* Stories Grid */}
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stories.map((story, index) => (
              <div key={index} className="bg-white rounded-xl p-8 border border-border hover:shadow-lg transition-all">
                {/* Header */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-secondary text-white flex items-center justify-center font-bold text-lg flex-shrink-0">
                    {story.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground text-lg">{story.name}</h3>
                    <p className="text-sm text-muted-foreground">{story.from}</p>
                  </div>
                </div>

                {/* University Info */}
                <div className="bg-primary/5 rounded-lg p-4 mb-6 border border-primary/10">
                  <p className="text-sm font-semibold text-primary mb-1">{story.university}</p>
                  <p className="text-sm text-foreground">{story.program}</p>
                  <p className="text-xs text-muted-foreground mt-2">{story.country}</p>
                </div>

                {/* Quote */}
                <p className="text-muted-foreground mb-6 italic">
                  {`"${story.quote}"`}
                </p>

                {/* Stats */}
                <div className="space-y-2 mb-6 pb-6 border-b border-border">
                  {story.stats.map((stat, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm">
                      <TrendingUp className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-foreground">{stat}</span>
                    </div>
                  ))}
                </div>

                {/* Achievement */}
                <div className="flex items-start gap-3">
                  <Award className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-muted-foreground">{story.achievement}</p>
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
