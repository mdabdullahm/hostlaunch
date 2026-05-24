"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, XCircle, User, Briefcase, ShoppingBag, Terminal } from 'lucide-react';

const targetUsers = [
  {
    title: "WordPress Beginners",
    description: "If you're starting your first blog or site, Bluehost's 1-click install and guided setup make it the easiest starting point.",
    icon: <User className="w-6 h-6" />,
  },
  {
    title: "Small Business Owners",
    description: "Perfect for local businesses needing a professional web presence with reliable email and 24/7 support.",
    icon: <Briefcase className="w-6 h-6" />,
  },
  {
    title: "New Online Stores",
    description: "Ideal for those launching their first e-commerce store using WooCommerce without a huge initial investment.",
    icon: <ShoppingBag className="w-6 h-6" />,
  }
];

const WhoIsItFor = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-full mx-auto px-6">
        
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Left: Who SHOULD use it */}
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-4xl font-black text-gray-900 mb-6">
                Who Should Use <span className="text-brand">Bluehost?</span>
              </h2>
              <p className="text-gray-600 text-lg">
                Bluehost is specifically designed to remove the technical hurdles of launching a website. 
                It&apost;s the best fit for:
              </p>
            </motion.div>

            <div className="space-y-6">
              {targetUsers.map((user, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-5 p-6 rounded-2xl bg-brand-light/30 border border-brand/10"
                >
                  <div className="w-12 h-12 bg-brand text-white rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-brand/20">
                    {user.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1 text-xl">{user.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{user.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Who should AVOID it */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:w-[400px] bg-gray-900 rounded-[1.5rem] p-10 text-white relative overflow-hidden"
          >
            {/* Background pattern */}
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <Terminal size={120} />
            </div>

            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
                <XCircle className="text-red-400" />
                Who Should Avoid It?
              </h3>
              
              <div className="space-y-8">
                <div>
                  <h4 className="text-red-400 font-bold mb-2 uppercase text-xs tracking-widest">High Traffic Sites</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    If your site gets 100k+ visitors a month, you&apost;ll need more power than shared hosting can provide. Consider VPS or Dedicated plans.
                  </p>
                </div>

                <div>
                  <h4 className="text-red-400 font-bold mb-2 uppercase text-xs tracking-widest">Advanced Developers</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Developers looking for complex server-level customizations might find Bluehost&apost;s managed environment a bit restrictive.
                  </p>
                </div>

                <div className="pt-8 border-t border-white/10">
                  <p className="text-brand-light font-medium italic text-sm">
                    Bluehost is a beginner&apost;s paradise, but advanced users might eventually outgrow it.
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

export default WhoIsItFor;