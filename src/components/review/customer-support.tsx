"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Headphones, MessageSquare, Phone, BookOpen, Star, CheckCircle } from 'lucide-react';

const supportChannels = [
  {
    title: "24/7 Live Chat",
    description: "The fastest way to get help. Usually, a representative joins within 2 minutes.",
    icon: <MessageSquare className="w-6 h-6" />,
  },
  {
    title: "Phone Support",
    description: "Prefer talking? They offer toll-free support for technical and billing issues.",
    icon: <Phone className="w-6 h-6" />,
  },
  {
    title: "Knowledge Base",
    description: "Thousands of articles and video tutorials for those who like to DIY.",
    icon: <BookOpen className="w-6 h-6" />,
  }
];

const CustomerSupport = () => {
  return (
    <section className="py-24 bg-gray-50/50">
      <div className="max-w-full mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left: Text Content */}
          <div className="flex-1 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-black text-gray-900 mb-6">
                24/7 <span className="text-brand">Expert Support</span>: <br />
                Are They Actually Helpful?
              </h2>
              <p className="text-gray-600 text-lg mb-10 leading-relaxed">
                We tested Bluehost&apost;s support at different times of the day. Their team is generally 
                knowledgeable and quick to respond, especially through live chat. Here&apost;s how you can reach them:
              </p>
            </motion.div>

            <div className="space-y-6">
              {supportChannels.map((channel, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-5 p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 bg-brand/10 text-brand rounded-xl flex items-center justify-center flex-shrink-0">
                    {channel.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{channel.title}</h3>
                    <p className="text-sm text-gray-600">{channel.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Support Rating Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex-1 order-1 lg:order-2 w-full max-w-md"
          >
            <div className="bg-brand rounded-[2.5rem] p-10 text-white shadow-2xl shadow-brand/30 relative overflow-hidden">
              {/* Decorative Circle */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-3 bg-white/20 rounded-2xl">
                    <Headphones className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <p className="text-white/70 text-sm font-bold uppercase tracking-wider">Our Support Score</p>
                    <div className="flex text-yellow-400 mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={20} fill="currentColor" />
                      ))}
                    </div>
                  </div>
                </div>

                <div className="space-y-6 mb-10">
                  {[
                    { label: "Response Time", score: "9/10" },
                    { label: "Technical Knowledge", score: "8.5/10" },
                    { label: "Friendliness", score: "10/10" }
                  ].map((item, idx) => (
                    <div key={idx} className="space-y-2">
                      <div className="flex justify-between text-sm font-bold">
                        <span>{item.label}</span>
                        <span>{item.score}</span>
                      </div>
                      <div className="h-1.5 bg-white/20 rounded-full">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: item.score.includes('8.5') ? '85%' : item.score.includes('9') ? '90%' : '100%' }}
                          transition={{ duration: 1, delay: 0.5 }}
                          className="h-full bg-white rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-white/10 border border-white/20 p-5 rounded-2xl">
                  <div className="flex items-center gap-2 mb-2 font-bold">
                    <CheckCircle className="w-5 h-5 text-white" />
                    <span>Pros Pick</span>
                  </div>
                  <p className="text-sm text-white/80 italic">
                    Their chat support is great for WordPress beginners who need help with 1-click installs and basic troubleshooting.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default CustomerSupport;