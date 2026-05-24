"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Globe, 
  ShieldCheck, 
  Zap, 
  Headphones, 
  Settings, 
  Layout, 
  Server,
  Lock
} from 'lucide-react';

const featureGroups = [
  {
    category: "WordPress & Ease of Use",
    icon: <Layout className="w-6 h-6" />,
    features: [
      { name: "AI Site Builder", detail: "Generate a custom website just by answering a few AI-powered questions." },
      { name: "Automatic WP Installs", detail: "WordPress comes pre-installed so you can start building immediately." },
      { name: "Custom WP Dashboard", detail: "A simplified interface that makes managing themes and plugins a breeze." }
    ]
  },
  {
    category: "Performance & Infrastructure",
    icon: <Zap className="w-6 h-6" />,
    features: [
      { name: "SSD Storage", detail: "All plans use flash storage for faster data access and lower latency." },
      { name: "CDN Integration", detail: "Cloudflare CDN is built-in to serve your content from the nearest server." },
      { name: "HTTP/3 Support", detail: "The latest web protocol for faster and more secure browser connections." }
    ]
  },
  {
    category: "Security & Backups",
    icon: <ShieldCheck className="w-6 h-6" />,
    features: [
      { name: "Free SSL Certificate", detail: "Encrypted connection for all your visitors is included at no cost." },
      { name: "Malware Scanning", detail: "Proactive monitoring to keep your site safe from malicious attacks." },
      { name: "Daily Backups", detail: "Automatically saves your site data so you can restore it anytime (Paid addon on Basic)." }
    ]
  },
  {
    category: "Developer Tools",
    icon: <Settings className="w-6 h-6" />,
    features: [
      { name: "Staging Environment", detail: "Test changes on a clone of your site before pushing them live." },
      { name: "SSH Access", detail: "Secure shell access for advanced users and developers to manage files." },
      { name: "FTP/SFTP", detail: "Easily transfer large amounts of files to and from your hosting server." }
    ]
  }
];

const FeaturesBreakdown = () => {
  return (
    <section className="py-5 bg-gray-50/30">
      <div className="max-w-full mx-auto px-6">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-black text-gray-900 mb-4"
          >
            Bluehost <span className="text-brand">Feature Breakdown</span>: <br /> 
            What&apos;s Under the Hood?
          </motion.h2>
          <p className="text-gray-600 text-lg">
            We&apos;ve analyzed every single tool and technology Bluehost provides to ensure it meets modern web standards.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {featureGroups.map((group, groupIndex) => (
            <motion.div
              key={groupIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: groupIndex * 0.1 }}
              className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-brand/5 transition-all"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-brand-light text-brand rounded-2xl">
                  {group.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{group.category}</h3>
              </div>

              <div className="space-y-6">
                {group.features.map((feature, fIndex) => (
                  <div key={fIndex} className="group">
                    <h4 className="font-bold text-gray-900 flex items-center gap-2 mb-1 group-hover:text-brand transition-colors">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand" />
                      {feature.name}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed pl-3.5 border-l border-gray-100">
                      {feature.detail}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Comparison Footnote */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 p-6 bg-brand/5 border border-brand/10 rounded-2xl text-center"
        >
          <p className="text-gray-700 font-medium italic">
            Looking for more power? Check out their <span className="text-brand font-bold underline">VPS</span> and <span className="text-brand font-bold underline">Dedicated</span> plans for high-traffic sites.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default FeaturesBreakdown;