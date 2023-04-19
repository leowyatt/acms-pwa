import { Admin, Resource, fetchUtils } from 'react-admin';

import { PostCreate, PostEdit, PostList } from '@/components/Admin/posts';
import { apiUrl, tokenDef } from '@/config';

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
      <Admin basename="/admin" dataProvider={dataProvider}>
        <Resource name="Posts" list={PostList} edit={PostEdit} create={PostCreate}   />
      </Admin>
    )
  );
};

export default Page;
