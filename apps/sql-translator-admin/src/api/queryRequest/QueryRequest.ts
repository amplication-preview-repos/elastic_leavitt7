import { ExecutionResult } from "../executionResult/ExecutionResult";

export type QueryRequest = {
  createdAt: Date;
  description: string | null;
  executionResults?: Array<ExecutionResult>;
  id: string;
  translatedSql: string | null;
  updatedAt: Date;
};
