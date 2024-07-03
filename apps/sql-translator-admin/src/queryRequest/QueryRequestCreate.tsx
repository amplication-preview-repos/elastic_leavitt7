import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { ExecutionResultTitle } from "../executionResult/ExecutionResultTitle";

export const QueryRequestCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="description" source="description" />
        <ReferenceArrayInput
          source="executionResults"
          reference="ExecutionResult"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ExecutionResultTitle} />
        </ReferenceArrayInput>
        <TextInput label="translatedSQL" multiline source="translatedSql" />
      </SimpleForm>
    </Create>
  );
};
