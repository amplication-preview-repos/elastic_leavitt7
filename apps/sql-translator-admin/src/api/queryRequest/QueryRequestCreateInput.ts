import { ExecutionResultCreateNestedManyWithoutQueryRequestsInput } from "./ExecutionResultCreateNestedManyWithoutQueryRequestsInput";

export type QueryRequestCreateInput = {
  description?: string | null;
  executionResults?: ExecutionResultCreateNestedManyWithoutQueryRequestsInput;
  translatedSql?: string | null;
};
