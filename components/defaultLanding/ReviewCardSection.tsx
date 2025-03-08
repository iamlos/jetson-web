import React from 'react';
import { motion } from 'framer-motion';
import { reviews } from './data/reviewCard';

interface ReviewCardProps {
  name: string;
  role: string;
  content: string;
  image?: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ name, role, content, image }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-lg shadow-lg p-6 h-full flex flex-col"
    >
      <div className="mb-4">
        <img 
          src="/highlights/quote-gg-green.svg" 
          alt="Quote" 
          className="h-8 w-8 text-violet-500" 
        />
      </div>
      <p className="text-gray-700 mb-6 flex-grow">{content}</p>
      <div className="flex items-center">
        {image ? (
          <img 
            src={image} 
            alt={name} 
            className="h-12 w-12 rounded-full mr-4 object-cover"
          />
        ) : (
          <div className="h-12 w-12 rounded-full bg-violet-100 flex items-center justify-center mr-4">
            <span className="text-violet-700 font-medium text-lg">
              {name.charAt(0)}
            </span>
          </div>
        )}
        <div>
          <h4 className="font-semibold text-gray-900">{name}</h4>
          <p className="text-sm text-gray-500">{role}</p>
        </div>
      </div>
    </motion.div>
  );
};

const ReviewCardSection: React.FC = () => {

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-gray-900 mb-4"
          >
            What Our Athletes Say
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-20 h-1 bg-violet-500 mx-auto mb-4"
          ></motion.div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Hear from athletes who have successfully used our platform
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <ReviewCard 
              key={index}
              name={review.name}
              role={review.role}
              content={review.content}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewCardSection;