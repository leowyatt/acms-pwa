// in Contractss.js
import * as React from 'react';
import {
  Create,
  Datagrid,
  DateField,
  DateInput,
  DeleteButton,
  DeleteWithConfirmButton,
  Edit,
  EditButton,
  Filter,
  FilterList,
  FilterListItem,
  FilterLiveSearch,
  List,
  ReferenceInput,
  SaveButton,
  SavedQueriesList,
  SelectInput,
  Show,
  ShowButton,
  SimpleForm,
  SimpleShowLayout,
  TextField,
  TextInput,
  Toolbar,
  useRecordContext,
} from 'react-admin';

import BookIcon from '@mui/icons-material/Book';
import CategoryIcon from '@mui/icons-material/LocalOffer';
import MailIcon from '@mui/icons-material/MailOutline';
import { Card, CardContent, Icon } from '@mui/material';

export const ContractsIcon = BookIcon;

export const ContractsFilter = (props: any) => (
  <Filter {...props}>
    {/* <TextInput label="Search" source="q" alwaysOn /> */}
    <TextInput label="resources.contracts.fields.num" source="num" alwaysOn />
    <DateInput label="resources.contracts.fields.startAt" source="startAt" alwaysOn />
    <DateInput label="resources.contracts.fields.endAt" source="endAt" alwaysOn />
  </Filter>
);

export const PostFilterSidebar = () => {
  // const record = useRecordContext();
  return (
    <Card sx={{ order: -1, mr: 2, mt: 9, width: 200 }}>
      <CardContent>
        {/* <SavedQueriesList /> */}
        {/* <FilterLiveSearch /> */}
        <FilterList label="Filter" icon={<CategoryIcon />}>
          <FilterListItem label="resources.contracts.fields.isExpired" value={{ dateEnd: true }} />
          <FilterListItem
            label="resources.contracts.fields.notJoined"
            value={{ has_newsletter: true }}
          />
        </FilterList>
      </CardContent>
    </Card>
  );
};

export const ContractsList = (props: any) => (
  <List
    // aside={<PostFilterSidebar />}
    filters={<ContractsFilter />}
    {...props}
  >
    <Datagrid>
      {/* <TextField source="id" /> */}
      <TextField source="num" label="resources.contracts.fields.num" />
      <DateField source="createdAt" label="resources.contracts.fields.createdAt" />
      <DateField source="startAt" label="resources.contracts.fields.startAt" />
      <DateField source="endAt" label="resources.contracts.fields.endAt" />
      <EditButton />
      <ShowButton />
    </Datagrid>
  </List>
);

const ContractsTitle = () => {
  const record = useRecordContext();
  return <span>Contracts {record ? `"${record.num}"` : ''}</span>;
};

const EditToolbar = (props: any) => (
  <Toolbar {...props}>
    <SaveButton />
    <DeleteWithConfirmButton
      confirmContent="You will not be able to recover this record. Are you sure?"
      confirmTitle=""
    />
  </Toolbar>
);

export const ContractsEdit = (props: any) => (
  <Edit title={<ContractsTitle />} {...props}>
    <SimpleForm toolbar={<EditToolbar />}>
      <TextInput label="resources.contracts.fields.num" source="num" />
      <TextInput label="resources.contracts.fields.createdAt" source="createdAt" disabled />
      <DateInput label="resources.contracts.fields.startAt" source="startAt" />
      <DateInput label="resources.contracts.fields.endAt" source="endAt" />
    </SimpleForm>
  </Edit>
);

export const ContractsCreate = (props: any) => (
  <Create title="Create a Contracts" {...props}>
    <SimpleForm>
      <TextInput label="resources.contracts.fields.num" source="num" />
      <DateInput label="resources.contracts.fields.startAt" source="startAt" />
      <DateInput label="resources.contracts.fields.endAt" source="endAt" />
    </SimpleForm>
  </Create>
);

export const ContractShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="num" label="resources.contracts.fields.num" />
      <DateField source="createdAt" label="resources.contracts.fields.createdAt" />
      <DateField source="startAt" label="resources.contracts.fields.startAt" />
      <DateField source="endAt" label="resources.contracts.fields.endAt" />{' '}
    </SimpleShowLayout>
  </Show>
);
