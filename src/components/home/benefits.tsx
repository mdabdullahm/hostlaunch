"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Rocket, ShieldCheck, Wallet } from 'lucide-react';

const benefits = [
  {
    title: "Boost Your Search Engine Ranking",
    description: "Bluehost's lightning-fast servers and built-in SEO tools give your website the speed it needs to rank higher on Google and attract more visitors.",
    icon: <TrendingUp className="w-12 h-12" />,
    imageContent: "bg-gradient-to-br from-brand/20 to-brand/5",
    isReverse: false
  },
  {
    title: "Scale Your Business Without Limits",
    description: "Start small and grow big. With unmetered bandwidth and easy one-click upgrades, Bluehost grows with your business needs.",
    icon: <Rocket className="w-12 h-12" />,
    imageContent: "bg-gradient-to-br from-blue-50 to-indigo-50",
    isReverse: true
  },
  {
    title: "Peace of Mind Security",
    description: "Never worry about data loss or hackers. With automated backups and free SSL, your hard work and your customers' data stay protected 24/7.",
    icon: <ShieldCheck className="w-12 h-12" />,
    imageContent: "bg-gradient-to-br from-green-50 to-teal-50",
    isReverse: false
  },
  {
    title: "Maximum Value for Your Money",
    description: "Get premium features like a free domain, CDN, and professional email without the premium price tag. It's the most cost-effective way to launch.",
    icon: <Wallet className="w-12 h-12" />,
    imageContent: "bg-gradient-to-br from-orange-50 to-yellow-50",
    isReverse: true
  }
];

const Benefits = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* Section Heading */}
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-black text-gray-900"
          >
            Real Benefits for <span className="text-brand">Your Growth</span>
          </motion.h2>
          <div className="w-24 h-2 bg-brand mx-auto mt-6 rounded-full" />
        </div>

        {/* Benefits List */}
        <div className="space-y-32">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-24 ${
                benefit.isReverse ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Text Side */}
              <motion.div 
                initial={{ opacity: 0, x: benefit.isReverse ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex-1 space-y-6 text-center lg:text-left"
              >
                <div className="inline-flex p-3 bg-brand-light text-brand rounded-2xl mb-2">
                  {benefit.icon}
                </div>
                <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                  {benefit.title}
                </h3>
                <p className="text-xl text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
                <ul className="space-y-3">
                    {["Premium Performance", "24/7 Monitoring", "User-Friendly Interface"].map((item, i) => (
                        <li key={i} className="flex items-center gap-2 justify-center lg:justify-start font-semibold text-gray-700">
                            <div className="w-1.5 h-1.5 rounded-full bg-brand" />
                            {item}
                        </li>
                    ))}
                </ul>
              </motion.div>

              {/* Visual Side */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`flex-1 w-full aspect-square lg:aspect-video rounded-[3rem] ${benefit.imageContent} border border-gray-100 relative flex items-center justify-center group`}
              >
                 {/* Floating Decorative Elements */}
                 <div className="absolute inset-10 border-2 border-dashed border-brand/20 rounded-[2rem] group-hover:rotate-3 transition-transform duration-500" />
                 <div className="bg-white p-10 rounded-3xl shadow-2xl group-hover:-translate-y-4 transition-transform duration-500">
                    <div className="w-20 h-2 bg-gray-100 rounded mb-4" />
                    <div className="w-32 h-2 bg-gray-100 rounded mb-8" />
                    <div className="flex gap-4">
                        <div className="w-12 h-12 rounded-full bg-brand/10" />
                        <div className="flex-1 space-y-2">
                            <div className="w-full h-2 bg-brand/20 rounded" />
                            <div className="w-1/2 h-2 bg-brand/20 rounded" />
                        </div>
                    </div>
                 </div>
              </motion.div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Benefits;