"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Check, X, Trophy, Star } from 'lucide-react';

const Comparison = () => {
  const comparisonData = [
    { feature: "Starting Price", bluehost: "$2.95/mo", siteground: "$2.99/mo", hostgator: "$3.75/mo" },
    { feature: "Free Domain", bluehost: true, siteground: false, hostgator: true },
    { feature: "Free SSL", bluehost: true, siteground: true, hostgator: true },
    { feature: "WordPress Recommended", bluehost: true, siteground: true, hostgator: false },
    { feature: "Customer Support", bluehost: "24/7 Live Chat/Phone", siteground: "24/7 Chat/Tickets", hostgator: "24/7 Chat/Phone" },
    { feature: "Storage (Basic)", bluehost: "10 GB SSD", siteground: "10 GB SSD", hostgator: "10 GB SSD" },
  ];

  return (
    <section className="py-10 bg-white">
      <div className="max-w-full mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 text-brand font-bold uppercase tracking-widest text-sm mb-4"
          >
            <Trophy className="w-5 h-5" />
            The Ultimate Comparison
          </motion.div>
          <h2 className="text-4xl font-black text-gray-900">
            How Does <span className="text-brand">Bluehost</span> Stack Up?
          </h2>
          <p className="mt-4 text-gray-600">
            We compared Bluehost with its top two industry competitors. Here&apost;s why it remains our top choice for value and ease of use.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto">
          <motion.table 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full text-left border-collapse min-w-[700px]"
          >
            <thead>
              <tr className="border-b border-gray-100">
                <th className="py-6 px-4 text-gray-500 font-bold uppercase text-xs tracking-wider">Features</th>
                <th className="py-6 px-4 bg-brand/5 rounded-t-3xl border-x border-t border-brand/20">
                  <div className="flex items-center gap-2 text-brand">
                    <Star className="w-5 h-5 fill-brand" />
                    <span className="text-xl font-black">Bluehost</span>
                  </div>
                </th>
                <th className="py-6 px-4 text-gray-400 font-bold text-lg">SiteGround</th>
                <th className="py-6 px-4 text-gray-400 font-bold text-lg">HostGator</th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((item, index) => (
                <tr key={index} className="border-b border-gray-50 group hover:bg-gray-50/50 transition-colors">
                  <td className="py-5 px-4 font-bold text-gray-700">{item.feature}</td>
                  
                  {/* Bluehost Column (Highlighted) */}
                  <td className="py-5 px-4 bg-brand/5 border-x border-brand/10 font-bold text-gray-900">
                    {typeof item.bluehost === 'boolean' ? (
                      item.bluehost ? <Check className="text-brand stroke-[3px]" /> : <X className="text-red-400" />
                    ) : (
                      item.bluehost
                    )}
                  </td>

                  {/* Competitor 1 */}
                  <td className="py-5 px-4 text-gray-500">
                    {typeof item.siteground === 'boolean' ? (
                      item.siteground ? <Check className="text-gray-400" /> : <X className="text-red-300" />
                    ) : (
                      item.siteground
                    )}
                  </td>

                  {/* Competitor 2 */}
                  <td className="py-5 px-4 text-gray-500">
                    {typeof item.hostgator === 'boolean' ? (
                      item.hostgator ? <Check className="text-gray-400" /> : <X className="text-red-300" />
                    ) : (
                      item.hostgator
                    )}
                  </td>
                </tr>
              ))}
              
              {/* Table Footer / Call to Action Row */}
              <tr>
                <td className="py-10 px-4"></td>
                <td className="py-10 px-4 bg-brand/5 border-x border-b border-brand/20 rounded-b-3xl">
                  <motion.a 
                    href="https://www.bluehost.com/track/your-id"
                    target="_blank"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="block text-center bg-brand text-white py-3 rounded-xl font-black shadow-lg shadow-brand/20"
                  >
                    Get Bluehost Now
                  </motion.a>
                </td>
                <td className="py-10 px-4"></td>
                <td className="py-10 px-4"></td>
              </tr>
            </tbody>
          </motion.table>
        </div>

        {/* Summary Verdict */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 p-8 bg-gray-50 rounded-3xl border border-gray-100 flex flex-col md:flex-row items-center gap-6"
        >
          <div className="w-16 h-16 bg-brand text-white rounded-2xl flex items-center justify-center flex-shrink-0">
             <Star className="w-8 h-8 fill-white" />
          </div>
          <div>
            <h4 className="text-xl font-bold text-gray-900 mb-1">Our Comparative Verdict</h4>
            <p className="text-gray-600 leading-relaxed">
              While SiteGround offers great performance, Bluehost provides better overall value by including a <span className="font-bold text-brand underline decoration-brand/30">Free Domain</span> and much more affordable renewal rates. For most WordPress beginners, Bluehost is the clear winner.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Comparison;