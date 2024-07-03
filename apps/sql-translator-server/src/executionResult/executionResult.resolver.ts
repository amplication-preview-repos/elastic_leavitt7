import * as graphql from "@nestjs/graphql";
import { ExecutionResultResolverBase } from "./base/executionResult.resolver.base";
import { ExecutionResult } from "./base/ExecutionResult";
import { ExecutionResultService } from "./executionResult.service";

@graphql.Resolver(() => ExecutionResult)
export class ExecutionResultResolver extends ExecutionResultResolverBase {
  constructor(protected readonly service: ExecutionResultService) {
    super(service);
  }
}
