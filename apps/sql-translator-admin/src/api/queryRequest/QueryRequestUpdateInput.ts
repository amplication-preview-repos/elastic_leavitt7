import { ExecutionResultUpdateManyWithoutQueryRequestsInput } from "./ExecutionResultUpdateManyWithoutQueryRequestsInput";

export type QueryRequestUpdateInput = {
  description?: string | null;
  executionResults?: ExecutionResultUpdateManyWithoutQueryRequestsInput;
  translatedSql?: string | null;
};
