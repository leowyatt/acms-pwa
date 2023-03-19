import { Admin, DataProvider, Resource, fetchUtils } from 'react-admin';

import { apiUrl, tokenDef } from '@/config';
import strapiRestProvider from '@/utils/simpleRestProvider';

localStorage.setItem('token', tokenDef);

const httpClient = (url: string, options: any = {}) => {
  if (!options.headers) {
    options.headers = new Headers({ Accept: 'application/json' });
  }
  const token = localStorage.getItem('token');

  options.headers.set('Authorization', `Bearer ${token}`);
  return fetchUtils.fetchJson(url, options);
};

export const dataProviderRest = strapiRestProvider(apiUrl, httpClient);
