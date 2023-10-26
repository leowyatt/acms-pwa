import React, { useEffect, useState } from 'react';
import { Admin, CustomRoutes, Resource, fetchUtils } from 'react-admin';
import { Route } from 'react-router-dom';

import ArticleIcon from '@mui/icons-material/Article';

import { useApolloClient } from '@apollo/react-hooks';
import pgDataProvider from 'ra-postgraphile';

import {
  ContractShow,
  ContractsCreate,
  ContractsEdit,
  ContractsList,
} from '@/components/Admin/contracts';
import { CustomPeople } from '@/components/Admin/custom_people';
import { RaLayout } from '@/components/Ra/RaLayout';
import { i18nProvider } from '@/i18n/ru';
import { LineitemsList } from '@/components/Admin/lineitems';
import { ItemsList } from '@/components/Admin/items';
import { PeopleList } from '@/components/Admin/people';

const AdminPage = () => {
  const [dataProvider, setDataProvider] = useState(null as any);
  const client = useApolloClient();

  useEffect(() => {
    (async () => {
      const dataProvider = await pgDataProvider(client);
      setDataProvider(() => dataProvider);
    })();
  }, []);

  return (
    dataProvider && (
      <Admin
        layout={RaLayout}
        basename="/admin"
        dataProvider={dataProvider}
        i18nProvider={i18nProvider}
      >
        {/* <Resource
          options={{ label: 'Договора' }}
          name="contracts"
          icon={ArticleIcon}
          list={ContractsList}
          edit={ContractsEdit}
          create={ContractsCreate}
          show={ContractShow}
        /> */}
        <Resource name="people" list={PeopleList} />
        <CustomRoutes>
          <Route path="/custom/people" element={<CustomPeople />} />
        </CustomRoutes>
      </Admin>
    )
  );
};

export default AdminPage;
