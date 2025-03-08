import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'next-i18next';
import { salesParagraphContent } from './data/salesParagraph';

const SalesParagraphSection = () => {
  const { t } = useTranslation('common');
  const Icon = salesParagraphContent.icon;

  return (
    <section className="py-16 w-full" style={{ backgroundColor: '#10111D' }}>
      <div className="container px-4 mx-auto max-w-6xl">
        <div className="flex flex-col">
          <div className="flex gap-2 items-center mb-4">
            <h2 className="text-7xl text-white font-bold text-[clamp(2.2rem,5vw,4.5rem)] leading-tight">
              <span className="text-white">{salesParagraphContent.prefix}</span>{' '}
              <span className="inline-flex items-center">
                <Icon className="h-10 w-10 text-[#56F699] mr-2" />
                <span className="text-[#56F699]">{salesParagraphContent.highlight}</span>
              </span>{' '}
              <span className="text-white">{salesParagraphContent.suffix}</span>
            </h2>
          </div>
          <p className="text-7xl text-[#A3A6C2] max-w-7xl text-[clamp(2.2rem,5vw,4.5rem)] leading-tight">
            {salesParagraphContent.description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default SalesParagraphSection;