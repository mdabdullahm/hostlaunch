"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, XCircle, ThumbsUp, ThumbsDown } from 'lucide-react';

const ProsCons = () => {
  const pros = [
    "Officially recommended by WordPress.org since 2005.",
    "Free Domain name and SSL Certificate included for the first year.",
    "Outstanding 24/7 customer support via chat and phone.",
    "User-friendly custom dashboard perfect for beginners.",
    "One-click WordPress installation and AI site builder.",
    "Unmetered bandwidth on most hosting plans."
  ];

  const cons = [
    "Renewal rates are higher than the introductory prices.",
    "Site migration is not free on the basic hosting plan.",
    "Aggressive upselling during the initial checkout process."
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-full mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-black text-gray-900 mb-4"
          >
            The <span className="text-brand">Good</span> & The <span className="text-red-500">Bad</span>
          </motion.h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            No hosting provider is perfect. Here is a balanced look at what we love about Bluehost and where they could improve.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          
          {/* Pros Column */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-brand/5 rounded-[2.5rem] p-8 lg:p-12 border border-brand/10 shadow-sm"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-brand text-white rounded-2xl shadow-lg shadow-brand/20">
                <ThumbsUp size={28} />
              </div>
              <h3 className="text-2xl font-black text-gray-900 tracking-tight">What We Like</h3>
            </div>
            
            <ul className="space-y-5">
              {pros.map((pro, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="mt-1 flex-shrink-0">
                    <CheckCircle2 size={22} className="text-brand fill-brand/10" />
                  </div>
                  <span className="text-gray-700 font-medium leading-relaxed italic border-b border-brand/5 pb-1 w-full">
                    {pro}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Cons Column */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-red-50/50 rounded-[2.5rem] p-8 lg:p-12 border border-red-100 shadow-sm"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-red-500 text-white rounded-2xl shadow-lg shadow-red-200">
                <ThumbsDown size={28} />
              </div>
              <h3 className="text-2xl font-black text-gray-900 tracking-tight">What Could Be Better</h3>
            </div>
            
            <ul className="space-y-5">
              {cons.map((con, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="mt-1 flex-shrink-0">
                    <XCircle size={22} className="text-red-400 fill-red-50" />
                  </div>
                  <span className="text-gray-600 font-medium leading-relaxed border-b border-red-50 pb-1 w-full">
                    {con}
                  </span>
                </motion.li>
              ))}
            </ul>

            {/* Disclosure/Tip */}
            <div className="mt-12 p-6 bg-white rounded-2xl border border-red-100 italic text-sm text-gray-500">
              <strong>💡 Pro Tip:</strong> You can avoid the high renewal rates by locking in the 36-month plan during your initial signup!
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ProsCons;