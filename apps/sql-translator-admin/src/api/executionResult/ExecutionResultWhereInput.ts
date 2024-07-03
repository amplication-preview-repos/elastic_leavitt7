import { StringFilter } from "../../util/StringFilter";
import { QueryRequestWhereUniqueInput } from "../queryRequest/QueryRequestWhereUniqueInput";
import { JsonFilter } from "../../util/JsonFilter";

export type ExecutionResultWhereInput = {
  id?: StringFilter;
  queryRequest?: QueryRequestWhereUniqueInput;
  result?: JsonFilter;
};
