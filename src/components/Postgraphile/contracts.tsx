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
  SimpleForm,
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
    <TextInput label="Number" source="num" alwaysOn />
    <DateInput label="Start Date" source="startAt" alwaysOn />
    <DateInput label="End Date" source="endAt" alwaysOn />
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
          <FilterListItem label="Is Expired" value={{ dateEnd: true }} />
          <FilterListItem label="Not Joined" value={{ has_newsletter: true }} />
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
      <TextField source="num" />
      <DateField source="createdAt" />
      <DateField source="startAt" />
      <DateField source="endAt" />
      <EditButton />
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
      <TextInput label="Number Contract" source="num" />
      <TextInput label="Created Date" source="createdAt" disabled />
      <DateInput label="Start Date" source="startAt" />
      <DateInput label="End Date" source="endAt" />
    </SimpleForm>
  </Edit>
);

export const ContractsCreate = (props: any) => (
  <Create title="Create a Contracts" {...props}>
    <SimpleForm>
      <TextInput label="Number Contract" source="num" />
      <DateInput label="Start Date" source="startAt" />
      <DateInput label="End Date" source="endAt" />
    </SimpleForm>
  </Create>
);
