import { QueryRequest } from "../queryRequest/QueryRequest";
import { JsonValue } from "type-fest";

export type ExecutionResult = {
  createdAt: Date;
  id: string;
  queryRequest?: QueryRequest | null;
  result: JsonValue;
  updatedAt: Date;
};
