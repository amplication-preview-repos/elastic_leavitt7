import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { ExecutionResultTitle } from "../executionResult/ExecutionResultTitle";

export const QueryRequestEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
