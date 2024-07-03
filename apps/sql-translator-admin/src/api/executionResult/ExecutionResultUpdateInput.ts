import { QueryRequestWhereUniqueInput } from "../queryRequest/QueryRequestWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type ExecutionResultUpdateInput = {
  queryRequest?: QueryRequestWhereUniqueInput | null;
  result?: InputJsonValue;
};
