"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, ArrowRight, CheckCircle } from 'lucide-react';
import Link from 'next/link';

const CTASection = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-full mx-auto">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden bg-brand rounded-[1.5rem] p-10 lg:p-20 text-center shadow-2xl shadow-brand/30"
        >
          {/* ব্যাকগ্রাউন্ড ডেকোরেশন */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-60 h-60 bg-black/10 rounded-full blur-3xl" />

          <div className="relative z-10">
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex p-4 bg-white/20 backdrop-blur-md rounded-2xl mb-8"
            >
              <Rocket className="w-10 h-10 text-white animate-bounce" />
            </motion.div>

            <motion.h2 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-4xl lg:text-6xl font-black text-white mb-6 leading-tight"
            >
              Ready to Launch Your <br className="hidden lg:block" /> 
              Dream Website Today?
            </motion.h2>

            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-white/80 mb-10 max-w-2xl mx-auto font-medium"
            >
              Join over 2 million website owners who trust Bluehost. Get started now for as low as <span className="text-white font-bold">$2.95/mo.</span>
            </motion.p>

            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-6"
            >
              <Link 
                href="https://www.bluehost.com/track/your-id" 
                target="_blank"
                className="group flex items-center gap-3 bg-white text-brand px-10 py-5 rounded-2xl font-black text-xl hover:bg-gray-100 transition-all shadow-xl hover:-translate-y-1 active:scale-95"
              >
                Claim Your Discount Now
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </Link>
            </motion.div>

            {/* ছোট ট্রাস্ট পয়েন্ট */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-4 text-white/70 font-semibold"
            >
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                <span>30-Day Money Back</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                <span>24/7 Expert Support</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                <span>Free 1-Year Domain</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;