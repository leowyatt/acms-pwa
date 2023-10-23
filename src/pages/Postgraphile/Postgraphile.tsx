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
} from '@/components/Postgraphile/contracts';
import { LatestNews } from '@/components/Postgraphile/news';
import { RaLayout } from '@/components/Ra/RaLayout';
import { i18nProvider } from '@/i18n/ru';

const Postgraphile = () => {
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
        basename="/postgraphile"
        dataProvider={dataProvider}
        i18nProvider={i18nProvider}
      >
        <Resource
          options={{ label: 'Договора' }}
          name="contracts"
          icon={ArticleIcon}
          list={ContractsList}
          edit={ContractsEdit}
          create={ContractsCreate}
          show={ContractShow}
        />
        <CustomRoutes>
          <Route path="/news" element={<LatestNews />} />
        </CustomRoutes>
      </Admin>
    )
  );
};

export default Postgraphile;
