import { SortOrder } from "../../util/SortOrder";

export type QueryRequestOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  translatedSql?: SortOrder;
  updatedAt?: SortOrder;
};
