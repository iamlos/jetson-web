import { useTranslation } from 'next-i18next';
import costSavingsData from './data/costSavings';

const CostSavingsSection = () => {
  const { t } = useTranslation('common');
  const Icon = costSavingsData.icon;

  return (
    <section className="py-16 w-full" style={{ backgroundColor: '#10111D' }}>
      <div className="container px-4 mx-auto max-w-6xl">
        <div className="flex flex-col justify-center items-center text-center">
          <div className="flex gap-2 items-center mb-4">
            <h2 className="text-7xl font-bold text-white text-[clamp(2rem,5vw,4.5rem)]">
              <span className="text-white">{costSavingsData.prefix}</span>{' '}
              <span className="inline-flex items-center">
                <Icon className="h-10 w-10 text-[#56F699] mr-2" />
                <span className="text-[#56F699]">{costSavingsData.highlight}</span>
              </span>{' '}
              <span className="text-white">{costSavingsData.suffix}</span>
            </h2>
          </div>
          <p className="text-7xl text-[#A3A6C2] max-w-6xl text-[clamp(2rem,5vw,4.5rem)]">
            {costSavingsData.description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default CostSavingsSection;