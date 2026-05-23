"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight, Star } from 'lucide-react';
import Link from 'next/link';

const plans = [
  {
    name: "Basic",
    description: "Perfect for a single blog or small website.",
    price: "9.99",
    discountPrice: "2.95",
    features: ["1 Website", "10 GB SSD Storage", "Free Domain (1st Year)", "Free SSL Certificate", "Standard Support"],
    link: "https://www.bluehost.com/track/your-id",
    recommended: false
  },
  {
    name: "Choice Plus",
    description: "Great for growing sites that need more security.",
    price: "19.99",
    discountPrice: "4.95",
    features: ["Unlimited Websites", "40 GB SSD Storage", "Free Domain (1st Year)", "Daily Website Backup", "Malware Scanning", "Domain Privacy"],
    link: "https://www.bluehost.com/track/your-id",
    recommended: true
  },
  {
    name: "Online Store",
    description: "Ideal for selling products online with ease.",
    price: "24.99",
    discountPrice: "9.95",
    features: ["Unlimited Websites", "100 GB SSD Storage", "Free Domain (1st Year)", "E-commerce Plugins", "Store Analytics", "Exclusive Store Themes"],
    link: "https://www.bluehost.com/track/your-id",
    recommended: false
  }
];

const HostingPlans = () => {
  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-black text-gray-900 mb-6"
          >
            Bluehost <span className="text-brand">Hosting Plans</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600"
          >
            Choose the plan that fits your needs. All plans include a 30-day money-back guarantee.
          </motion.p>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative p-8 rounded-3xl border ${
                plan.recommended 
                ? "border-brand shadow-2xl shadow-brand/10 bg-white scale-105 z-10" 
                : "border-gray-100 shadow-xl bg-white"
              }`}
            >
              {plan.recommended && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand text-white px-4 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                  <Star className="w-4 h-4 fill-white" />
                  Most Popular
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-500 text-sm">{plan.description}</p>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline gap-1">
                  <span className="text-gray-400 line-through text-lg font-medium">${plan.price}</span>
                  <span className="text-4xl font-black text-gray-900">${plan.discountPrice}</span>
                  <span className="text-gray-500 font-medium">/mo*</span>
                </div>
                <p className="text-xs text-brand font-bold mt-2 uppercase tracking-wider">Discounted Rate</p>
              </div>

              <div className="space-y-4 mb-10">
                {plan.features.map((feature, fIndex) => (
                  <div key={fIndex} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-brand/10 flex items-center justify-center">
                      <Check className="w-3 h-3 text-brand stroke-[4px]" />
                    </div>
                    <span className="text-gray-600 text-sm font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              <Link 
                href={plan.link}
                target="_blank"
                className={`flex items-center justify-center gap-2 w-full py-4 rounded-xl font-bold transition-all ${
                  plan.recommended 
                  ? "bg-brand text-white hover:bg-brand-dark shadow-lg shadow-brand/20" 
                  : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                }`}
              >
                Select Plan
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Disclaimer */}
        <p className="text-center text-gray-400 text-sm mt-12">
          *Prices reflect discounted introductory rates. Renewal prices will apply.
        </p>

      </div>
    </section>
  );
};

export default HostingPlans;