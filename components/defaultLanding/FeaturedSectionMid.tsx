import { useTranslation } from 'next-i18next';
import { featuredSectionData } from './data/featuredsectionmid';
import React from 'react';

const FeaturedSectionMid = () => {
  const { t } = useTranslation('common');

  return (
    <div className="py-24 bg-white sm:py-32">
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="font-semibold text-indigo-600 text-base/7">{featuredSectionData.heading}</h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-gray-900 text-pretty sm:text-5xl lg:text-balance">
            {featuredSectionData.title}
          </p>
          <p className="mt-6 text-gray-600 text-lg/8">{featuredSectionData.description}</p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-10 max-w-xl lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {featuredSectionData.features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="relative pl-16">
                  <dt className="font-semibold text-gray-900 text-base/7">
                    <div className="flex absolute top-0 left-0 justify-center items-center bg-indigo-600 rounded-lg size-10">
                      <Icon className="size-6 text-white" aria-hidden="true" />
                    </div>
                    {feature.title}
                  </dt>
                  <dd className="mt-2 text-gray-600 text-base/7">{feature.description}</dd>
                </div>
              );
            })}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default FeaturedSectionMid;