import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { QueryRequestTitle } from "../queryRequest/QueryRequestTitle";

export const ExecutionResultCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="queryRequest.id"
          reference="QueryRequest"
          label="queryRequest"
        >
          <SelectInput optionText={QueryRequestTitle} />
        </ReferenceInput>
        <div />
      </SimpleForm>
    </Create>
  );
};
