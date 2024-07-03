import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { QueryRequestService } from "./queryRequest.service";
import { QueryRequestControllerBase } from "./base/queryRequest.controller.base";

@swagger.ApiTags("queryRequests")
@common.Controller("queryRequests")
export class QueryRequestController extends QueryRequestControllerBase {
  constructor(protected readonly service: QueryRequestService) {
    super(service);
  }
}
