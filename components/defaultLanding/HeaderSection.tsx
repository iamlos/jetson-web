import Link from 'next/link';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import useTheme from 'hooks/useTheme';
import env from '@/lib/env';

const HeaderSection = () => {
  const { toggleTheme, selectedTheme } = useTheme();
  const { t } = useTranslation('common');

  return (
    <div className="top-0 z-50 px-4 py-1 bg-base-300 navbar sm:px-1" style={{ backgroundColor: '#10111D' }}>
      <div className="flex-1">
        <Link href="/" className="text-xl normal-case">
          <Image
            src="/brand/jetson_logo.svg"
            alt="Jetson Logo"
            width={120}
            height={40}
          />
        </Link>
      </div>
      <div className="flex-none">
        <ul className="flex gap-2 items-center menu menu-horizontal sm:gap-4">
          {env.darkModeEnabled && (
            <li>
              <button
                className="flex justify-center items-center p-0 bg-none rounded-lg"
                onClick={toggleTheme}
              >
                <selectedTheme.icon className="w-5 h-5" />
              </button>
            </li>
          )}
          <li>
            <Link
              href="/auth/join"
              className="px-2 py-3 text-[#10111D] btn btn-primary btn-md sm:px-4"
            >
              {t('sign-up')}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderSection;