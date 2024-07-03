import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { QUERYREQUEST_TITLE_FIELD } from "./QueryRequestTitle";

export const QueryRequestShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="description" source="description" />
        <TextField label="ID" source="id" />
        <TextField label="translatedSQL" source="translatedSql" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="ExecutionResult"
          target="queryRequestId"
          label="ExecutionResults"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="queryRequest"
              source="queryrequest.id"
              reference="QueryRequest"
            >
              <TextField source={QUERYREQUEST_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="result" source="result" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
