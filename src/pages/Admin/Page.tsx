import { SetStateAction, useEffect, useState } from 'react';
import { Admin, DataProvider, Resource } from 'react-admin';

import { useApolloClient } from '@apollo/client';
import buildGraphQLProvider, { BuildQuery, IntrospectionResult } from 'ra-data-graphql-strapi';

import { PostCreate, PostEdit, PostList } from '@/components/Admin/posts';

const Page = () => {
  const client = useApolloClient();

  const [dataProvider, setDataProvider] = useState<DataProvider>();
  useEffect(() => {
    buildGraphQLProvider({
      client,
      buildQuery: function (introspectionResults: IntrospectionResult): BuildQuery {
        throw new Error('Function not implemented.');
      },
    }).then((dataProvider: SetStateAction<DataProvider<string> | undefined>) =>
      setDataProvider(dataProvider),
    );
  }, [client]);

  return (
    dataProvider && (
      <Admin basename="/admin" dataProvider={dataProvider}>
        <Resource name="Post" list={PostList} edit={PostEdit} create={PostCreate} />
      </Admin>
    )
  );
};

export default Page;
