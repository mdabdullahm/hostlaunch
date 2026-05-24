"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { MousePointerClick, Bot, LayoutGrid, CheckCircle } from 'lucide-react';

const steps = [
  {
    title: "Guided Onboarding",
    description: "When you first log in, Bluehost asks a few simple questions about your site to help you choose the right tools and theme.",
    icon: <MousePointerClick className="w-8 h-8" />,
  },
  {
    title: "AI Website Builder",
    description: "Don't want to code? Their new AI builder creates a custom WordPress site for you in minutes based on your preferences.",
    icon: <Bot className="w-8 h-8" />,
  },
  {
    title: "Centralized Dashboard",
    description: "Manage your domains, emails, and websites from one intuitive interface without ever getting lost in technical jargon.",
    icon: <LayoutGrid className="w-8 h-8" />,
  }
];

const EaseOfUse = () => {
  return (
    <section className="py-10 bg-white overflow-hidden">
      <div className="max-w-full mx-auto px-6">
        
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left: Interactive Visual */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1 relative"
          >
            <div className="relative z-10 bg-gray-50 rounded-[3rem] p-8 border border-gray-100 shadow-2xl">
              {/* Dashboard Simulation */}
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-gray-200 pb-4">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                  <div className="h-2 w-24 bg-gray-200 rounded" />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="h-32 bg-brand/10 rounded-2xl flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-8 h-8 bg-brand text-white rounded-lg flex items-center justify-center mx-auto mb-2">W</div>
                      <div className="h-1.5 w-12 bg-brand/20 rounded mx-auto" />
                    </div>
                  </div>
                  <div className="h-32 bg-gray-200/50 rounded-2xl animate-pulse" />
                </div>

                <div className="space-y-3">
                  <div className="h-2 bg-gray-200 rounded w-full" />
                  <div className="h-2 bg-gray-200 rounded w-3/4" />
                </div>

                <button className="w-full py-3 bg-brand text-white rounded-xl font-bold text-sm shadow-lg shadow-brand/20">
                  Launch My Site
                </button>
              </div>
            </div>

            {/* Floating Element */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -bottom-6 -right-6 bg-white p-5 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-3 z-20"
            >
              <div className="w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                <CheckCircle size={24} />
              </div>
              <p className="font-bold text-gray-900 leading-tight">1-Click <br /> Install Ready</p>
            </motion.div>
          </motion.div>

          {/* Right: Steps Content */}
          <div className="flex-1">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl lg:text-5xl font-black text-gray-900 mb-8"
            >
              Is Bluehost <span className="text-brand">Beginner Friendly?</span>
            </motion.h2>
            
            <div className="space-y-10">
              {steps.map((step, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-6 group"
                >
                  <div className="flex-shrink-0 w-16 h-16 bg-brand-light text-brand rounded-2xl flex items-center justify-center group-hover:bg-brand group-hover:text-white transition-all duration-300">
                    {step.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default EaseOfUse;