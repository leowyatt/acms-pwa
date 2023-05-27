import React, { useEffect, useState } from 'react';
import { Admin, Resource, fetchUtils } from 'react-admin';

import { useApolloClient } from '@apollo/react-hooks';
import pgDataProvider from 'ra-postgraphile';

import { ContractsCreate, ContractsEdit, ContractsList } from '@/components/Postgraphile/contracts';
import { RaLayout } from '@/components/Ra/RaLayout';

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
      <Admin layout={RaLayout} basename="/postgraphile" dataProvider={dataProvider}>
        <Resource
          name="Contracts"
          list={ContractsList}
          edit={ContractsEdit}
          create={ContractsCreate}
        />
      </Admin>
    )
  );
};

export default Postgraphile;
