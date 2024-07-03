import { QueryRequestWhereInput } from "./QueryRequestWhereInput";
import { QueryRequestOrderByInput } from "./QueryRequestOrderByInput";

export type QueryRequestFindManyArgs = {
  where?: QueryRequestWhereInput;
  orderBy?: Array<QueryRequestOrderByInput>;
  skip?: number;
  take?: number;
};
