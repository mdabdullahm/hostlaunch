"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Check, Info, AlertCircle, ShoppingCart, Rocket, Store } from 'lucide-react';
import Link from 'next/link';

const plans = [
  {
    name: "Basic",
    icon: <Rocket className="w-6 h-6" />,
    introPrice: "2.95",
    renewalPrice: "11.99",
    target: "Perfect for Beginners",
    bestFor: "Single blog, portfolio, or a personal website.",
    features: ["1 Website", "10 GB SSD Storage", "Free Domain (1st Year)", "Standard Support"],
    recommended: false
  },
  {
    name: "Choice Plus",
    icon: <Check className="w-6 h-6" />,
    introPrice: "4.95",
    renewalPrice: "21.99",
    target: "Best Value / Most Popular",
    bestFor: "Bloggers and small businesses looking to grow.",
    features: ["Unlimited Websites", "40 GB SSD Storage", "Free Domain (1st Year)", "Domain Privacy", "Daily Backups (1st Yr)"],
    recommended: true
  },
  {
    name: "Online Store",
    icon: <Store className="w-6 h-6" />,
    introPrice: "9.95",
    renewalPrice: "26.99",
    target: "For E-commerce",
    bestFor: "Selling products online with WordPress/WooCommerce.",
    features: ["Unlimited Websites", "100 GB SSD Storage", "Exclusive Store Themes", "E-commerce Plugins ($450 value)", "Store Analytics"],
    recommended: false
  }
];

const PricingReview = () => {
  return (
    <section className="py-24 bg-gray-50/50">
      <div className="max-w-full mx-auto px-6">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-black text-gray-900 mb-4"
          >
            Bluehost <span className="text-brand">Pricing</span>: Is it worth your money?
          </motion.h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Bluehost is known for its aggressive introductory discounts. Below is a transparent breakdown 
            of their shared hosting plans to help you choose the right one.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`bg-white rounded-[2.5rem] p-8 border-2 transition-all hover:shadow-2xl ${
                plan.recommended ? "border-brand shadow-xl" : "border-gray-100 shadow-sm"
              }`}
            >
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 ${
                plan.recommended ? "bg-brand text-white" : "bg-brand-light text-brand"
              }`}>
                {plan.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-1">{plan.name}</h3>
              <p className="text-brand font-bold text-sm mb-6 uppercase tracking-wider">{plan.target}</p>
              
              <div className="mb-6 pb-6 border-b border-gray-100">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-black text-gray-900">${plan.introPrice}</span>
                  <span className="text-gray-500 font-medium">/mo*</span>
                </div>
                <p className="text-xs text-gray-400 mt-1">Renews at ${plan.renewalPrice}/mo</p>
              </div>

              <div className="mb-8">
                <p className="text-sm text-gray-700 font-semibold mb-4 italic">Best for: {plan.bestFor}</p>
                <ul className="space-y-3">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center gap-3 text-sm text-gray-600">
                      <Check className="w-4 h-4 text-brand stroke-[3px]" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <Link 
                href="https://www.bluehost.com/track/your-id" 
                target="_blank"
                className={`flex items-center justify-center gap-2 w-full py-4 rounded-xl font-bold transition-all ${
                  plan.recommended 
                  ? "bg-brand text-white hover:bg-brand-dark" 
                  : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                }`}
              >
                Select {plan.name}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Pricing Strategy Tip */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-white border border-gray-100 p-8 lg:p-12 rounded-[2.5rem] shadow-sm flex flex-col lg:flex-row gap-8 items-center"
        >
          <div className="w-20 h-20 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
            <AlertCircle size={40} />
          </div>
          <div>
            <h4 className="text-2xl font-bold text-gray-900 mb-2">Money Saving Tip!</h4>
            <p className="text-gray-600 leading-relaxed">
              Bluehost offers the lowest price when you commit to a <span className="font-bold text-gray-900">36-month term</span>. 
              Since renewal prices are higher, we recommend locking in the introductory rate for as long as possible 
              to maximize your savings. Also, all plans come with a <span className="font-bold text-gray-900">30-day money-back guarantee</span>.
            </p>
          </div>
          <Link 
            href="https://www.bluehost.com/track/your-id"
            target="_blank"
            className="flex-shrink-0 bg-brand/10 text-brand px-8 py-4 rounded-xl font-bold hover:bg-brand hover:text-white transition-all"
          >
            Check Current Deals
          </Link>
        </motion.div>

      </div>
    </section>
  );
};

export default PricingReview;