import isMobile from '@/utils/is-mobile';

import type { Notifications } from './types';

const title = 'ACMS PWA';

const email = 'auther-email@gmail.com';

const repository = 'https://github.com/suren-atoyan/react-pwa';

const messages = {
  app: {
    crash: {
      title: 'Oooops... Sorry, I guess, something went wrong. You can:',
      options: {
        email: `contact with author by this email - ${email}`,
        reset: 'Press here to reset the application',
      },
    },
  },
  loader: {
    fail: 'Hmmmmm, there is something wrong with this component loading process... Maybe trying later would be the best idea',
  },
  images: {
    failed: 'something went wrong during image loading :(',
  },
  404: 'Hey bro? What are you looking for?',
};

const dateFormat = 'MMMM DD, YYYY';

const notifications: Notifications = {
  options: {
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'left',
    },
    autoHideDuration: 6000,
  },
  maxSnack: isMobile ? 3 : 4,
};

const loader = {
  // no more blinking in your app
  delay: 300, // if your asynchronous process is finished during 300 milliseconds you will not see the loader at all
  minimumLoading: 700, // but if it appears, it will stay for at least 700 milliseconds
};

const defaultMetaTags = {
  image: '/cover.png',
  description: 'Starter kit for modern web applications',
};
const giphy404 = 'https://giphy.com/embed/xTiN0L7EW5trfOvEk0';

const tokenDef =
  'f2519beaff7c33434789c7d740346d2ea7d25caaf85eb5182c671a72997a459fd79bac795aee235db0557106b2802eabb9755fa8018008dc092efdf848802c60c95a92ef00ba35f04d7830de1d97437efbb99532197800779e35a7cb8dd748c0287e879306603b5ec7e2015bf31907967b20403b3365a68bdbb0237624daa1f1';

const apiUrlStrapi = window.location.origin.split(':5173')[0] + ':6010';

const apiUrlPostgraphile = window.location.origin.split(':5173')[0] + ':4020';

export {
  loader,
  notifications,
  dateFormat,
  messages,
  repository,
  email,
  title,
  defaultMetaTags,
  giphy404,
  tokenDef,
  apiUrlPostgraphile,
  apiUrlStrapi,
};
