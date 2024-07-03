import { ExecutionResultWhereInput } from "./ExecutionResultWhereInput";
import { ExecutionResultOrderByInput } from "./ExecutionResultOrderByInput";

export type ExecutionResultFindManyArgs = {
  where?: ExecutionResultWhereInput;
  orderBy?: Array<ExecutionResultOrderByInput>;
  skip?: number;
  take?: number;
};
