import { Admin, Resource, fetchUtils } from 'react-admin';

import { RaLayout } from '@/components/Ra/RaLayout';
import { PostCreate, PostEdit, PostList } from '@/components/Strapi/posts';
import { apiUrlStrapi as apiUrl, tokenDef } from '@/config';
import strapiRestProvider from '@/utils/simpleRestProvider';

localStorage.setItem('token', tokenDef);

const Page = () => {
  const httpClient = (url: string, options: any = {}) => {
    if (!options.headers) {
      options.headers = new Headers({ Accept: 'application/json' });
    }
    const token = localStorage.getItem('token');

    options.headers.set('Authorization', `Bearer ${token}`);
    return fetchUtils.fetchJson(url, options);
  };

  const dataProvider = strapiRestProvider(apiUrl, httpClient);

  return (
    dataProvider && (
      <Admin layout={RaLayout} basename="/strapi" dataProvider={dataProvider}>
        <Resource name="Posts" list={PostList} edit={PostEdit} create={PostCreate} />
      </Admin>
    )
  );
};

export default Page;
