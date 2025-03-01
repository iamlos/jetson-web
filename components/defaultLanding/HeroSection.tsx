import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import React from 'react';
import dynamic from 'next/dynamic';
import AnimatedText from './AnimatedText';
import Image from 'next/image';
import MuxPlayer from '@mux/mux-player-react';

const HeroSection = () => {
  const { t } = useTranslation('common');
  return (
    <div className="container bg-[url('/bg/grid_straight.svg')] bg-cover bg-center opacity-90"> 
      <div className="flex flex-col justify-center items-center py-12 mx-auto w-full h-full">
        <h1 className="py-8 text-8xl text-center text-white semi-bold leading-1">
          College Sports <span className="text-[#56F699] font-bold ">Recruiting </span> <br />on Auto-pilot
        </h1>
        
        <div className="mb-4 text-xl text-white pyb-10">
          {/* <AnimatedText /> */}
          <p className="text-center text-white">
            We make connecting with coaches, getting scholarships,<br />earning more from NILs, easier with our Ai powered platform.
          </p>
        </div>
        
         <div className="flex justify-center items-center pb-4 mt-6">
          <Link 
            href="/join/get-recruited" 
            className="px-6 py-3 text-lg font-semibold text-[#10111D] bg-[#56F699] hover:bg-[#56F699]/90 rounded-lg transition-all duration-200"
          >
            {t('get-started')}
          </Link>
          </div>
      </div>

      <div className="overflow-hidden inset-1 mx-auto bg-green-300/10 rounded-lg ring-1 ring-green-300/50 shadow-[0_0_18px_rgba(134,239,172,0.2)]" style={{ maxWidth: 'var(--content-width, 1024px)' }}>
        <div className="relative w-full" style={{ paddingBottom: 'var(--aspect-ratio, 56.25%)' }}>
          <img
            src="/videos/_scrnsht_screencast_2025-02-20.gif"
            alt="Dashboard Screenshot"
            className="object-contain absolute inset-0 w-full h-full"
          />
          
          <div className="absolute inset-0 z-10 w-full h-full bg-[#000000] opacity-50" />
          {/* Fallback to GIF if MuxPlayer fails */}
          <div className="absolute inset-0">
            <MuxPlayer
              className="absolute inset-0"
              style={{ width: '100%', height: '100%', borderRadius: '0' } as React.CSSProperties}
              streamType="on-demand"
              playbackId="uxEyDXLuOTqusOHL00EdoIEj01IECb5z801IeH8n5IbEBI"
              autoPlay
              loop
              muted
              thumbnailTime={1}
              primaryColor="#56F699"
              secondaryColor="#ffffff"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
