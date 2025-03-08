import React from 'react';
import { motion } from 'framer-motion';

const GreenPromoSection: React.FC = () => {
  return (
    <section className="w-full bg-[#90EE90] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
              Still here? You must be curious.
            </h2>
            <p className="text-xl sm:text-2xl text-gray-800">
              Sign up today and take your career into your own hands.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <a
              href="/join/get-recruited"
              className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-white bg-gray-900 hover:bg-gray-800 transition-colors duration-300"
            >
              Get 70% off
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GreenPromoSection;