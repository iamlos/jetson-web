import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import useTheme from 'hooks/useTheme';
import env from '@/lib/env';
import Image from 'next/image';

const HeaderLandingPage = () => {
  const { toggleTheme, selectedTheme } = useTheme();
  const { t } = useTranslation('common');

  return (
    <div className="px-6 py-4 bg-transparent border-0 navbar sm:px-1">
      <div className="flex-1 flex items-center">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/brand/jetson_logo.svg"
            alt="Jetson Logo"
            width={120}
            height={40}
            className="object-contain"
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
              className="px-2 py-3 text-white btn btn-primary btn-md sm:px-4"
            >
              {t('sign-up')}
            </Link>
          </li>
          <li>
            <Link
              href="/auth/login"
              className="px-2 py-3 btn btn-primary dark:border-zinc-600 dark:border-2 dark:text-zinc-200 btn-outline sm:px-4 btn-md"
            >
              {t('sign-in')}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderLandingPage;