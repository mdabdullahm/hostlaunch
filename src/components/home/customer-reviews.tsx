"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: "Sarah Johnson",
    role: "Blogger",
    text: "HostLaunch helped me pick Bluehost, and I've never looked back. My site loads in under a second!",
    rating: 5
  },
  {
    name: "Mark T.",
    role: "Store Owner",
    text: "The WordPress integration is seamless. Setting up my online store was much easier than I expected.",
    rating: 5
  },
  {
    name: "Elena Rodriguez",
    role: "Freelancer",
    text: "I love the 24/7 support. As a beginner, I had many questions, and Bluehost experts were always there.",
    rating: 4
  },
  {
    name: "David Chen",
    role: "Tech Enthusiast",
    text: "Best value for money. The free domain and SSL included in the basic plan are a lifesaver.",
    rating: 5
  },
  {
    name: "Jessica Smith",
    role: "Designer",
    text: "The custom dashboard is so intuitive. Managing multiple client sites has never been this easy.",
    rating: 5
  },
  {
    name: "Ahmed Raza",
    role: "Developer",
    text: "Reliable uptime and great server performance. Bluehost is definitely my go-to recommendation.",
    rating: 5
  },
];

// লুপটি নিরবচ্ছিন্ন রাখতে আমরা লিস্টটিকে ডাবল করে দেব
const doubledReviews = [...reviews, ...reviews];

const CustomerReviews = () => {
  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-full mx-auto px-6 mb-16 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl lg:text-5xl font-black text-gray-900"
        >
          Trusted by <span className="text-brand">Millions</span> Worldwide
        </motion.h2>
        <p className="mt-4 text-gray-600 text-lg">See what others are saying about their experience with Bluehost.</p>
      </div>

      {/* Marquee Container */}
      <div className="flex relative">
        <motion.div 
          className="flex gap-6"
          animate={{
            x: ["0%", "-50%"], // অর্ধেক পর্যন্ত গেলে আবার শুরুতে ফিরে আসবে লুপ হিসেবে
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30, // কত দ্রুত চলবে সেটি এখান থেকে নিয়ন্ত্রণ করা যাবে
              ease: "linear",
            },
          }}
        >
          {doubledReviews.map((review, index) => (
            <div 
              key={index}
              className="w-[350px] flex-shrink-0 bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:border-brand/30 transition-colors"
            >
              <div className="flex gap-1 mb-4 text-orange-400">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>
              
              <div className="relative">
                <Quote className="absolute -top-2 -left-2 w-8 h-8 text-brand/5 -z-0" />
                <p className="text-gray-700 leading-relaxed mb-6 relative z-10 italic">
                  {review.text}
                </p>
              </div>

              <div className="flex items-center gap-4 border-t border-gray-50 pt-6">
                <div className="w-12 h-12 rounded-full bg-brand/10 flex items-center justify-center text-brand font-bold text-xl">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{review.name}</h4>
                  <p className="text-sm text-gray-500">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CustomerReviews;