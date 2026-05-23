"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Zap, 
  ShieldCheck, 
  Headphones, 
  Globe, 
  Settings, 
  Clock,
  ArrowRight
} from 'lucide-react';
import Link from 'next/link';

const features = [
  {
    title: "Optimized for WordPress",
    description: "Recommended by WordPress.org since 2005. Get seamless integration and 1-click installs.",
    icon: <Settings className="w-8 h-8" />,
  },
  {
    title: "Lightning Fast Speed",
    description: "SSD storage and CDN integration ensure your website loads in the blink of an eye.",
    icon: <Zap className="w-8 h-8" />,
  },
  {
    title: "FREE Domain & SSL",
    description: "Save more with a free domain name for the first year and a free SSL certificate for security.",
    icon: <Globe className="w-8 h-8" />,
  },
  {
    title: "24/7 Expert Support",
    description: "Need help? Their experts are available around the clock via chat, phone, or email.",
    icon: <Headphones className="w-8 h-8" />,
  },
  {
    title: "Advanced Security",
    description: "Protect your site with resource protection, automated backups, and malware scanning.",
    icon: <ShieldCheck className="w-8 h-8" />,
  },
  {
    title: "99.9% Uptime Guarantee",
    description: "Your business never sleeps, and neither does Bluehost. Reliable uptime you can trust.",
    icon: <Clock className="w-8 h-8" />,
  },
];

const WhyBluehost = () => {
  return (
    <section className="py-24 bg-gray-50/50">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-black text-gray-900 mb-6"
          >
            Why Choose <span className="text-brand">Bluehost</span> for Your Site?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600"
          >
            Powering over 2 million websites worldwide, Bluehost offers the perfect balance of performance, 
            security, and affordability for beginners and pros alike.
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:shadow-brand/5 transition-all group"
            >
              <div className="w-16 h-16 bg-brand-light text-brand rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Link 
            href="https://www.bluehost.com/track/your-id" 
            target="_blank"
            className="inline-flex items-center gap-2 text-brand font-bold text-xl hover:underline underline-offset-8"
          >
            Explore all Bluehost features
            <ArrowRight className="w-6 h-6" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
};

export default WhyBluehost;