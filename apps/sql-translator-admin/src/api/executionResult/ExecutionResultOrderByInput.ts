import { SortOrder } from "../../util/SortOrder";

export type ExecutionResultOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  queryRequestId?: SortOrder;
  result?: SortOrder;
  updatedAt?: SortOrder;
};
