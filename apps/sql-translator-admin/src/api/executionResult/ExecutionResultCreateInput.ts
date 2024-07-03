import { QueryRequestWhereUniqueInput } from "../queryRequest/QueryRequestWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type ExecutionResultCreateInput = {
  queryRequest?: QueryRequestWhereUniqueInput | null;
  result?: InputJsonValue;
};
