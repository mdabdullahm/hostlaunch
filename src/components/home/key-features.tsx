"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Bot, 
  Cpu, 
  Layers, 
  LayoutDashboard, 
  ShieldAlert, 
  History 
} from 'lucide-react';

const keyFeatures = [
  {
    title: "AI Website Builder",
    description: "Build your site in minutes with Bluehost's new AI-driven builder. No coding skills required—just answer a few questions.",
    icon: <Bot className="w-10 h-10" />,
    color: "bg-blue-50"
  },
  {
    title: "High-Performance SSD",
    description: "Experience blazing fast load times with all-flash SSD storage. Your website's data is served instantly to your visitors.",
    icon: <Cpu className="w-10 h-10" />,
    color: "bg-purple-50"
  },
  {
    title: "Resource Protection",
    description: "Your site performance stays consistent even if other sites on the server experience a traffic spike.",
    icon: <Layers className="w-10 h-10" />,
    color: "bg-orange-50"
  },
  {
    title: "Custom Control Panel",
    description: "An intuitive dashboard that makes managing your domains, websites, and emails incredibly easy.",
    icon: <LayoutDashboard className="w-10 h-10" />,
    color: "bg-green-50"
  },
  {
    title: "Malware Scanning",
    description: "Keep your site safe from hackers with automated malware scanning and security monitoring around the clock.",
    icon: <ShieldAlert className="w-10 h-10" />,
    color: "bg-red-50"
  },
  {
    title: "Automated Backups",
    description: "Never worry about losing data. Bluehost offers daily backups to keep your hard work safe and restorable.",
    icon: <History className="w-10 h-10" />,
    color: "bg-teal-50"
  }
];

const KeyFeatures = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-full mx-auto px-6">
        
        <div className="flex flex-col lg:flex-row items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-brand font-bold uppercase tracking-widest mb-4"
            >
              Beyond the Basics
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl lg:text-5xl font-black text-gray-900"
            >
              Advanced Features for <span className="text-brand">Superior Performance</span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-gray-500 font-medium lg:text-right max-w-xs"
          >
            Bluehost provides the tools you need to build, manage, and scale your online presence.
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {keyFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              <div className={`mb-6 inline-flex p-4 rounded-2xl ${feature.color} text-gray-800 group-hover:bg-brand group-hover:text-white transition-all duration-300 shadow-sm`}>
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-brand transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed border-l-2 border-gray-100 pl-4 group-hover:border-brand transition-colors">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default KeyFeatures;