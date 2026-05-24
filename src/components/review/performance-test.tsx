"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Activity, Globe, Timer } from 'lucide-react';

const performanceStats = [
  { label: "Global Load Time", value: "1.2s", detail: "Industry Avg: 2.5s", icon: <Timer className="text-blue-500" /> },
  { label: "Uptime (Last 12 mo)", value: "99.99%", detail: "Industry Standard: 99.90%", icon: <Activity className="text-green-500" /> },
  { label: "TTFB (Server Response)", value: "450ms", detail: "Excellent Rating", icon: <Zap className="text-orange-500" /> },
];

const regionalSpeeds = [
  { region: "United States (East)", speed: "0.8s" },
  { region: "United Kingdom (London)", speed: "1.1s" },
  { region: "Germany (Frankfurt)", speed: "1.4s" },
  { region: "Asia (Singapore)", speed: "2.3s" },
  { region: "Australia (Sydney)", speed: "2.8s" },
];

const PerformanceTest = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-16 h-16 bg-brand/10 text-brand rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <Zap size={32} fill="currentColor" />
          </motion.div>
          <h2 className="text-4xl font-black text-gray-900 mb-4">
            Bluehost <span className="text-brand">Performance</span> & Speed Test
          </h2>
          <p className="text-gray-600 text-lg">
            We hosted a test site on Bluehost&apos;s Choice Plus plan for 12 months to get these real-world results. 
            Speed is a critical factor for Google ranking and user experience.
          </p>
        </div>

        {/* Metric Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {performanceStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-[2rem] border border-gray-100 bg-gray-50/50 text-center hover:bg-white hover:shadow-xl transition-all group"
            >
              <div className="mb-4 flex justify-center group-hover:scale-110 transition-transform">{stat.icon}</div>
              <h4 className="text-gray-500 font-bold text-sm uppercase tracking-widest mb-2">{stat.label}</h4>
              <div className="text-4xl font-black text-gray-900 mb-2">{stat.value}</div>
              <p className="text-brand font-semibold text-sm">{stat.detail}</p>
            </motion.div>
          ))}
        </div>

        {/* Speed Comparison Bars & Regional Speeds */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Global Speed Comparison */}
          <div className="bg-white p-8 lg:p-12 rounded-[2.5rem] border border-gray-100 shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Regional Speed Breakdown</h3>
            <div className="space-y-6">
              {regionalSpeeds.map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between text-sm font-bold text-gray-700">
                    <span>{item.region}</span>
                    <span className="text-brand">{item.speed}</span>
                  </div>
                  <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${100 - (parseFloat(item.speed) * 20)}%` }} // এনিমেশন লজিক
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      className="h-full bg-brand rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-8 text-sm text-gray-400 italic">
              *Tests conducted using a standard WordPress install with lightweight theme.
            </p>
          </div>

          {/* Core Web Vitals Summary */}
          <div className="space-y-8">
            <div className="flex gap-6 items-start">
              <div className="p-4 bg-brand rounded-2xl text-white">
                <Globe size={28} />
              </div>
              <div>
                <h4 className="text-2xl font-bold text-gray-900 mb-2">Google Core Web Vitals</h4>
                <p className="text-gray-600">
                  Bluehost passes all Core Web Vitals tests out of the box. Their server-side caching 
                  and HTTP/3 support ensure your site is Page Experience ready for Google.
                </p>
              </div>
            </div>
            <div className="p-8 bg-brand text-white rounded-3xl shadow-xl shadow-brand/20">
              <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Zap size={20} />
                Our Verdict on Speed
              </h4>
              <p className="text-white/90 leading-relaxed italic">
                For a shared hosting provider, Bluehost&apos;s speed is exceptional in the US and Europe. 
                If your audience is in Asia, we recommend using their built-in CDN for best results.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default PerformanceTest;