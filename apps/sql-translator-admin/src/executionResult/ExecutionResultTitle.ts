import { ExecutionResult as TExecutionResult } from "../api/executionResult/ExecutionResult";

export const EXECUTIONRESULT_TITLE_FIELD = "id";

export const ExecutionResultTitle = (record: TExecutionResult): string => {
  return record.id?.toString() || String(record.id);
};
