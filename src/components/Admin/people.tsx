import { InfiniteList, Datagrid, TextField, DateField } from 'react-admin';

export const PeopleList = () => (
  <InfiniteList>
    <Datagrid>
      <TextField source="id" />
      <TextField source="email" />
      <TextField source="name" />
      <TextField source="city" />
      <TextField source="state" />
      <TextField source="country" />
    </Datagrid>
  </InfiniteList>
);
