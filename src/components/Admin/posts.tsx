// in posts.js
import * as React from "react";
import {
  List,
  Datagrid,
  Edit,
  Create,
  SimpleForm,
  DateField,
  TextField,
  EditButton,
  TextInput,
  DateInput,
  useRecordContext,
  Filter,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import BookIcon from "@mui/icons-material/Book";
import { Icon } from "@mui/material";
export const PostIcon = BookIcon;

const PostFilter = (props: any) => (
  <Filter {...props}>
    <TextInput label='Search' source='q' alwaysOn />
  </Filter>
);


export const PostList = (props: any) => (
  <List filters={<PostFilter />} {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="attributes.title" />
      {/* <DateField source="published_at" />
      <TextField source="average_note" />
      <TextField source="views" /> */}
      <EditButton />
    </Datagrid>
  </List>
);

const PostTitle = () => {
  const record = useRecordContext();
  return <span>Post {record ? `"${record.attributes.title}"` : ""}</span>;
};

export const PostEdit = () => (
  <Edit title={<PostTitle />}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput source="attributes.title" />
      {/* <TextInput source="teaser" options={{ multiline: true }} /> */}
      {/* <TextInput multiline source="body" /> */}
      {/* <DateInput label="Publication date" source="published_at" />
      <TextInput source="average_note" />
      <TextInput disabled label="Nb views" source="views" /> */}
    </SimpleForm>
  </Edit>
);

export const PostCreate = () => (
  <Create title="Create a Post">
    <SimpleForm>
      <TextInput source="attributes.title" />
      {/* <TextInput source="teaser" options={{ multiline: true }} />
      <TextInput multiline source="body" />
      <TextInput label="Publication date" source="published_at" />
      <TextInput source="average_note" /> */}
    </SimpleForm>
  </Create>
);