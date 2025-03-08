import packageInfo from '../package.json';
import env from './env';

const app = {
  version: packageInfo.version,
  name: 'BoxyHQ',
  logoUrl: '/brand/jetson_logo.svg',
  url: env.appUrl,
};

export default app;
