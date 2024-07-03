import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ExecutionResultService } from "./executionResult.service";
import { ExecutionResultControllerBase } from "./base/executionResult.controller.base";

@swagger.ApiTags("executionResults")
@common.Controller("executionResults")
export class ExecutionResultController extends ExecutionResultControllerBase {
  constructor(protected readonly service: ExecutionResultService) {
    super(service);
  }
}
