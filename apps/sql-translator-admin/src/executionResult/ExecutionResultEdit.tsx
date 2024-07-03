import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { QueryRequestTitle } from "../queryRequest/QueryRequestTitle";

export const ExecutionResultEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
