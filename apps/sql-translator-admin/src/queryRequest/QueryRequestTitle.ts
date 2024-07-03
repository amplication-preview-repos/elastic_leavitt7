import { QueryRequest as TQueryRequest } from "../api/queryRequest/QueryRequest";

export const QUERYREQUEST_TITLE_FIELD = "description";

export const QueryRequestTitle = (record: TQueryRequest): string => {
  return record.description?.toString() || String(record.id);
};
