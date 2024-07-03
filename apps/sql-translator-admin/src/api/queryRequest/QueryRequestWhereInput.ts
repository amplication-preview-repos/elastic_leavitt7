import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ExecutionResultListRelationFilter } from "../executionResult/ExecutionResultListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type QueryRequestWhereInput = {
  description?: StringNullableFilter;
  executionResults?: ExecutionResultListRelationFilter;
  id?: StringFilter;
  translatedSql?: StringNullableFilter;
};
