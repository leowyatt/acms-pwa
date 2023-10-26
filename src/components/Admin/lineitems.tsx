import { InfiniteList, Datagrid, TextField, DateField } from 'react-admin';

export const LineitemsList = () => (
  <InfiniteList>
    <Datagrid>
      <TextField source="id" />
      <TextField source="quantity" />
      <TextField source="price" />
    </Datagrid>
  </InfiniteList>
);
