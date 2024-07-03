import * as graphql from "@nestjs/graphql";
import { QueryRequestResolverBase } from "./base/queryRequest.resolver.base";
import { QueryRequest } from "./base/QueryRequest";
import { QueryRequestService } from "./queryRequest.service";

@graphql.Resolver(() => QueryRequest)
export class QueryRequestResolver extends QueryRequestResolverBase {
  constructor(protected readonly service: QueryRequestService) {
    super(service);
  }
}
