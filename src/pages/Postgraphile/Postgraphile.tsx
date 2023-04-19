import React, { useEffect, useState } from 'react';
import { Admin, Resource, fetchUtils } from 'react-admin';

import { useApolloClient } from '@apollo/react-hooks';
import pgDataProvider from 'ra-postgraphile';

import { PostCreate, PostEdit, PostList } from '@/components/Strapi/posts';
import { apiUrl, tokenDef } from '@/config';

const Postgraphile = () => {
  const [dataProvider, setDataProvider] = useState(null);
  const client = useApolloClient();

  useEffect(() => {
    (async () => {
      const dataProvider = await pgDataProvider(client);
      setDataProvider(() => dataProvider);
    })();
  }, []);

  return (
    dataProvider && (
      <Admin basename="/postgraphile" dataProvider={dataProvider}>
        <Resource name="Posts" list={PostList} edit={PostEdit} create={PostCreate} />
      </Admin>
    )
  );
};

export default Postgraphile;
