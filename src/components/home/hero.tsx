"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Zap, Globe, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

const Hero = () => {
  // এনিমেশন সেটিংস
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-white">
      {/* ব্যাকগ্রাউন্ড ডেকোরেশন এলিমেন্ট */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-brand-light rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-72 h-72 bg-brand-light rounded-full blur-3xl opacity-30" />

      <div className="max-w-full mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* টেক্সট কন্টেন্ট */}
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="space-y-8"
          >
            <motion.div variants={fadeInUp}>
              <span className="inline-block px-4 py-1.5 rounded-full bg-brand-light text-brand font-bold text-sm tracking-wide uppercase">
                🚀 Special 2024 Offer
              </span>
            </motion.div>

            <motion.h1 
              variants={fadeInUp}
              className="text-5xl lg:text-7xl font-extrabold text-gray-900 leading-tight"
            >
              Building Websites is Easier with <span className="text-brand">HostLaunch</span>
            </motion.h1>

            <motion.p 
              variants={fadeInUp}
              className="text-xl text-gray-600 max-w-lg leading-relaxed"
            >
              Get Bluehost shared hosting for just <span className="font-bold text-gray-900">$2.95/mo*</span>. 
              Includes a FREE domain, SSL certificate, and 1-click WordPress install.
            </motion.p>

            <motion.div 
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link 
                href="https://www.bluehost.com/track/your-id" 
                target="_blank"
                className="group flex items-center justify-center gap-2 bg-brand text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-brand-dark transition-all shadow-xl shadow-brand/20 active:scale-95"
              >
                Claim Discount Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                href="/pricing" 
                className="flex items-center justify-center px-8 py-4 rounded-xl font-bold text-lg border-2 border-gray-100 text-gray-700 hover:border-brand hover:text-brand transition-all"
              >
                See Pricing
              </Link>
            </motion.div>

            {/* ট্রাস্ট ব্যাজ */}
            <motion.div 
              variants={fadeInUp}
              className="flex flex-wrap items-center gap-6 pt-4"
            >
              {[
                { icon: <Globe className="w-5 h-5" />, text: "Free Domain" },
                { icon: <ShieldCheck className="w-5 h-5" />, text: "Free SSL" },
                { icon: <Zap className="w-5 h-5" />, text: "Fast Setup" }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-gray-500 font-medium">
                  <span className="text-brand">{item.icon}</span>
                  {item.text}
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* ভিজ্যুয়াল কার্ড (ডান পাশ) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="bg-gradient-to-br from-brand to-brand-dark rounded-[2rem] p-1 shadow-2xl overflow-hidden group">
              <div className="bg-white rounded-[1.9rem] p-8 overflow-hidden relative">
                <div className="flex justify-between items-center mb-8">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                  <div className="text-xs font-mono text-gray-400 font-bold uppercase tracking-widest underline underline-offset-4 decoration-brand">bluehost_setup.exe</div>
                </div>
                
                {/* কন্টেন্ট সিমুলেশন */}
                <div className="space-y-4">
                  <div className="h-4 bg-gray-100 rounded w-3/4" />
                  <div className="h-4 bg-gray-100 rounded w-1/2" />
                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <div className="aspect-square bg-brand-light rounded-2xl flex items-center justify-center">
                       <Zap className="w-12 h-12 text-brand animate-pulse" />
                    </div>
                    <div className="aspect-square bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200" />
                  </div>
                </div>
              </div>
            </div>

            {/* ফ্লোটিং এনিমেটেড এলিমেন্ট */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -top-10 -right-10 bg-white p-6 rounded-2xl shadow-2xl border border-gray-100 flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                <CheckCircle className="w-7 h-7" />
              </div>
              <div>
                <p className="text-sm text-gray-500 font-bold uppercase">Success</p>
                <p className="text-xl font-black text-gray-900 leading-tight">Server Online</p>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;