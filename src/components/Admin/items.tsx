import { InfiniteList, Datagrid, TextField, DateField } from 'react-admin';

export const ItemsList = () => (
  <InfiniteList>
    <Datagrid>
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="price" />
      <TextField source="weight" />
    </Datagrid>
  </InfiniteList>
);
