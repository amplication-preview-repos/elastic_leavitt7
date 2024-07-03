import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { QUERYREQUEST_TITLE_FIELD } from "../queryRequest/QueryRequestTitle";

export const ExecutionResultShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
