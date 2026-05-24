"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Info, CheckCircle2, XCircle, Zap, Globe, Headphones, BadgeDollarSign } from 'lucide-react';
import Link from 'next/link';

const QuickOverview = () => {
  const specs = [
    { label: "Starting Price", value: "$2.95/mo*", icon: <BadgeDollarSign size={20} /> },
    { label: "Free Domain", value: "Yes (1st Year)", icon: <Globe size={20} /> },
    { label: "Free SSL", value: "Yes (Auto-install)", icon: <Zap size={20} /> },
    { label: "Support", value: "24/7 Chat & Phone", icon: <Headphones size={20} /> },
    { label: "Best For", value: "WordPress Beginners", icon: <CheckCircle2 size={20} /> },
  ];

  return (
    <section className="py-16 bg-gray-50/50">
      <div className="max-w-full mx-auto px-6">
        <div className="bg-white rounded-3xl border border-gray-100 shadow-xl overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            
            {/* Left: Summary Content */}
            <div className="flex-1 p-8 lg:p-12 border-b lg:border-b-0 lg:border-r border-gray-100">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-2 text-brand font-bold mb-4"
              >
                <Info size={24} />
                <span className="uppercase tracking-widest text-sm">Quick Summary</span>
              </motion.div>
              
              <motion.h2 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl font-black text-gray-900 mb-6"
              >
                Bluehost: The Verdict in 30 Seconds
              </motion.h2>
              
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-gray-600 leading-relaxed text-lg mb-8"
              >
                Bluehost is one of the oldest and most reliable hosting companies on the market. 
                Recommended by WordPress.org since 2005, it offers an incredibly easy-to-use 
                interface, a free domain for the first year, and one-click WordPress installation. 
                While its renewal prices can be higher, its performance and support make it the 
                perfect starting point for new bloggers and small business owners.
              </motion.p>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <h4 className="font-bold text-gray-900 flex items-center gap-2">
                    <CheckCircle2 size={18} className="text-brand" /> 
                    Pros
                  </h4>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• Free Domain & SSL included</li>
                    <li>• Best-in-class WP integration</li>
                    <li>• Reliable 24/7 customer help</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-bold text-gray-900 flex items-center gap-2">
                    <XCircle size={18} className="text-red-500" /> 
                    Cons
                  </h4>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• Higher renewal rates</li>
                    <li>• Upselling in checkout process</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Right: Quick Specs Table */}
            <div className="lg:w-[400px] bg-brand/5 p-8 lg:p-12">
              <h3 className="text-xl font-bold text-gray-900 mb-8">Fast Facts</h3>
              <div className="space-y-6">
                {specs.map((spec, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center justify-between border-b border-brand/10 pb-4 last:border-0"
                  >
                    <div className="flex items-center gap-3 text-gray-700 font-medium">
                      <span className="text-brand">{spec.icon}</span>
                      {spec.label}
                    </div>
                    <span className="font-bold text-gray-900">{spec.value}</span>
                  </motion.div>
                ))}
              </div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-10"
              >
                <Link 
                  href="https://www.bluehost.com/track/your-id"
                  target="_blank"
                  className="block w-full bg-brand text-white text-center py-4 rounded-xl font-bold shadow-lg shadow-brand/20 hover:bg-brand-dark transition-all"
                >
                  Grab 75% Off Deal
                </Link>
                <p className="text-[10px] text-center text-gray-400 mt-4 uppercase font-bold tracking-tighter">
                  Limited Time Offer Available Now
                </p>
              </motion.div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickOverview;