import Link from 'next/link';
import Image from 'next/image';
import { type ReactElement } from 'react';
import { useTranslation } from 'next-i18next';
import type { NextPageWithLayout } from 'types';
import { GetServerSidePropsContext } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import FAQSection from '@/components/defaultLanding/FAQSection';
import HeroSection from '@/components/defaultLanding/HeroSection';
import LogoSection from '@/components/defaultLanding/LogoSection';
import FeatureSection from '@/components/defaultLanding/FeatureSection';
import PricingSection from '@/components/defaultLanding/PricingSection';
import ComparisonSection from '@/components/defaultLanding/ComparisonSection';
import DecoBlockBorder from '@/components/defaultLanding/iconSection';
import DecoLine from '@/components/defaultLanding/DecoLine';
import useTheme from 'hooks/useTheme';
import env from '@/lib/env';
import Head from 'next/head';
import DashboardShowcase from '@/components/defaultLanding/DashboardShowcase';
import TestimonialTop from '@/components/defaultLanding/TestimonialTop';
import TestimonialShowcase from '@/components/defaultLanding/TestimonialShowcase';
import TestimonialsSection from '@/components/defaultLanding/TestimonialsSection';
import HowItWorks from '@/components/defaultLanding/HowItWorks';
import EduScholarshipSection from '@/components/defaultLanding/EduScholarshipSection';
import ComplianceFooter from '@/components/compliance/Footer';
import PartnerFooter from '@/components/defaultLanding/PartnerFooter';
import FeaturedSectionMid from '@/components/defaultLanding/FeaturedSectionMid';
import SalesParagraphSection from '@/components/defaultLanding/SalesParagraphSection';
import CostSavingsSection from '@/components/defaultLanding/CostSavingsSection';
import GreenPromoSection from '@/components/defaultLanding/GreenPromoSection';
import HeaderSection from '@/components/defaultLanding/HeaderSection';

const Home: NextPageWithLayout = () => {
  const { toggleTheme, selectedTheme } = useTheme();
  const { t } = useTranslation('common');

  return (
    <>
      <Head>
        <title>{t('homepage-title')}</title>
      </Head>

      <div className="min-h-screen" style={{ backgroundColor: '#10111D' }}>
        <div className="container mx-auto">
          <HeaderSection />
          <HeroSection />
          <DecoLine />
          <SalesParagraphSection />
          {/* <TestimonialTop /> */}
          <DecoLine />
          {/* <SalesParagraphSection /> */}
          <DecoLine />
          <CostSavingsSection />
          <DecoLine />
          <DashboardShowcase />

          <DecoLine />
          <LogoSection />
          <DecoLine />
          <HowItWorks />
          <DecoLine />

          <EduScholarshipSection />
          <DecoLine />
          <FeatureSection />
          <DecoLine />
          {/* <TestimonialShowcase /> */}
          <FeaturedSectionMid />
          <DecoLine />
          <GreenPromoSection />
          <DecoLine />
          
          {/* <PricingSection /> */}
          <ComparisonSection />
          <DecoLine />
          {/* <TestimonialsSection/> */}
          <div className="divider"></div>
          {/* <FAQSection /> */}
         
        </div>
      </div>
      <ComplianceFooter />
      
      <PartnerFooter />
    </>
  );
};

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  // Redirect to login page if landing page is disabled
  if (env.hideLandingPage) {
    return {
      redirect: {
        destination: '/auth/login',
        permanent: true,
      },
    };
  }

  const { locale } = context;

  return {
    props: {
      ...(await serverSideTranslations(locale || 'en', ['common'])),
    },
  };
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <>{page}</>;
};

export default Home;
