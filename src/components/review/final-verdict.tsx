"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Star, ArrowRight, ShieldCheck, Award } from 'lucide-react';
import Link from 'next/link';

const ratings = [
  { label: "Performance & Speed", score: 90 },
  { label: "Customer Support", score: 95 },
  { label: "Ease of Use", score: 100 },
  { label: "Value for Money", score: 92 },
];

const FinalVerdict = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-full mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gray-900 rounded-[1.5rem] overflow-hidden shadow-2xl relative"
        >
          {/* Decorative background elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand/20 rounded-full blur-[100px] -z-0" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand/10 rounded-full blur-[100px] -z-0" />

          <div className="flex flex-col lg:flex-row relative z-10">
            
            {/* Left: Score Breakdown */}
            <div className="flex-1 p-10 lg:p-16 bg-white/5 backdrop-blur-sm border-b lg:border-b-0 lg:border-r border-white/10">
              <div className="flex items-center gap-3 text-brand-light font-bold mb-8 uppercase tracking-widest text-sm">
                <Award size={20} />
                HostLaunch Scorecard
              </div>

              <div className="space-y-8">
                {ratings.map((item, index) => (
                  <div key={index} className="space-y-3">
                    <div className="flex justify-between items-center text-white font-bold">
                      <span>{item.label}</span>
                      <span className="text-brand-light">{item.score}%</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.score}%` }}
                        transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                        className="h-full bg-brand rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 flex flex-col items-center p-8 bg-brand rounded-3xl">
                <span className="text-white/80 font-bold uppercase text-xs tracking-widest mb-2">Overall Rating</span>
                <div className="text-6xl font-black text-white mb-2">4.8</div>
                <div className="flex text-yellow-400 gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={24} fill="currentColor" />
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Summary & CTA */}
            <div className="flex-1 p-10 lg:p-16 flex flex-col justify-center">
              <h2 className="text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">
                The Bottom Line: <br />
                <span className="text-brand-light">Should You Buy?</span>
              </h2>
              
              <p className="text-gray-300 text-lg leading-relaxed mb-8 italic">
                If youre a beginner looking for a reliable, WordPress-recommended, 
                and easy-to-use hosting service, <span className="text-white font-bold underline decoration-brand">Bluehost is the best choice on the market.</span> 
                While renewal prices are higher, the initial value you get with a free domain and SSL is unbeatable.
              </p>

              <div className="space-y-4 mb-10">
                <div className="flex items-center gap-3 text-white font-medium">
                  <ShieldCheck className="text-brand-light w-6 h-6" />
                  <span>30-Day Money-Back Guarantee</span>
                </div>
              </div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link 
                  href="https://www.bluehost.com/track/your-id" 
                  target="_blank"
                  className="group flex items-center justify-center gap-3 bg-brand text-white px-10 py-5 rounded-2xl font-black text-xl hover:bg-brand-dark transition-all shadow-xl shadow-brand/30"
                >
                  Start Your Website Now
                  <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                </Link>
                <p className="text-center text-gray-500 text-xs mt-4 uppercase tracking-tighter">
                  Special Offer: Get 75% Off Today
                </p>
              </motion.div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalVerdict;