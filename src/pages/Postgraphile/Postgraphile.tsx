import React, { useEffect, useState } from 'react';
import { Admin, Resource, fetchUtils } from 'react-admin';



import { useApolloClient } from '@apollo/react-hooks';
import pgDataProvider from 'ra-postgraphile';



import { ContractsCreate, ContractsEdit, ContractsList } from '@/components/Postgraphile/conracts';

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