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
import Head from 'next/head';
import DashboardShowcase from '@/components/defaultLanding/DashboardShowcase';
import TestimonialTop from '@/components/defaultLanding/TestimonialTop';
import TestimonialShowcase from '@/components/defaultLanding/TestimonialShowcase';
import TestimonialsSection from '@/components/defaultLanding/TestimonialsSection';
import HowItWorks from '@/components/defaultLanding/HowItWorks';
import EduScholarshipSection from '@/components/defaultLanding/EduScholarshipSection';
import ComplianceFooter from '@/components/compliance/Footer';
import PartnerFooter from '@/components/defaultLanding/PartnerFooter';
import HeaderLandingPage from '@/components/defaultLanding/HeaderLandingPage';
import { env } from 'node:process';

const GetRecruited: NextPageWithLayout = () => {
const { t } = useTranslation('common');

  return (
    <>
      <Head>
        <title>{t('homepage-title')}</title>
      </Head>

      <div className="min-h-screen" style={{ backgroundColor: '#10111D' }}>
        <div className="container mx-auto">
          <HeaderLandingPage />
          <HeroSection />
          <DecoLine />
          <TestimonialTop />
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

GetRecruited.getLayout = function getLayout(page: ReactElement) {
  return <>{page}</>;
};

export default GetRecruited;

