"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Star, ShieldCheck, Zap, Clock, ArrowRight, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

const ReviewHero = () => {
  return (
    <section className="relative pt-20 pb-16 lg:pt-32 lg:pb-24 bg-white overflow-hidden">
      {/* Background Element */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 bg-brand rounded-full blur-[100px]" />
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-brand rounded-full blur-[100px]" />
      </div>

      <div className="max-w-full mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          
          {/* Left Content: Title & Rating */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-brand/10 text-brand font-bold text-sm mb-6 uppercase tracking-wider"
            >
              <ShieldCheck className="w-4 h-4" />
              Expert Verified Review
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl lg:text-6xl font-black text-gray-900 leading-[1.1] mb-6"
            >
              Bluehost Review 2024: <br />
              <span className="text-brand">Still the Gold Standard?</span>
            </motion.h1>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap justify-center lg:justify-start items-center gap-4 mb-8"
            >
              <div className="flex text-orange-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={24} fill="currentColor" />
                ))}
              </div>
              <span className="text-2xl font-bold text-gray-900">4.8/5</span>
              <span className="text-gray-400">|</span>
              <span className="text-gray-600 font-medium">Over 2,000+ Votes</span>
            </motion.div>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xl text-gray-600 mb-10 max-w-2xl leading-relaxed"
            >
              We&apos;ve spent 12 months testing Bluehost&apos;s uptime, speed, and customer support. 
              Find out why it&apos;s still our #1 recommendation for WordPress beginners.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link 
                href="https://www.bluehost.com/track/your-id" 
                target="_blank"
                className="flex items-center justify-center gap-2 bg-brand text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-brand-dark transition-all shadow-xl shadow-brand/20 active:scale-95"
              >
                Visit Bluehost Official Site
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>

          {/* Right Side: Scorecard / Verdict */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex-1 w-full max-w-md"
          >
            <div className="bg-white rounded-[2.5rem] border border-gray-100 shadow-2xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-6">
                 <Zap className="w-12 h-12 text-brand/10" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-50 pb-4">
                The Verdict
              </h3>

              <div className="space-y-6">
                {[
                  { label: "Performance", score: "98%", icon: <Zap size={18}/> },
                  { label: "Uptime", score: "99.99%", icon: <Clock size={18}/> },
                  { label: "Ease of Use", score: "100%", icon: <CheckCircle2 size={18}/> },
                ].map((item, idx) => (
                  <div key={idx} className="space-y-2">
                    <div className="flex justify-between items-center font-bold">
                      <div className="flex items-center gap-2 text-gray-700">
                        <span className="text-brand">{item.icon}</span>
                        {item.label}
                      </div>
                      <span className="text-brand">{item.score}</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: item.score }}
                        transition={{ duration: 1, delay: 0.6 + (idx * 0.2) }}
                        className="h-full bg-brand"
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 bg-brand-light p-6 rounded-2xl">
                <p className="text-brand font-black text-center text-lg">
                  The best all-in-one hosting for anyone starting their first WordPress site.
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ReviewHero;