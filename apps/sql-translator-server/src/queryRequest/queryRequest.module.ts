import { Module } from "@nestjs/common";
import { QueryRequestModuleBase } from "./base/queryRequest.module.base";
import { QueryRequestService } from "./queryRequest.service";
import { QueryRequestController } from "./queryRequest.controller";
import { QueryRequestResolver } from "./queryRequest.resolver";

@Module({
  imports: [QueryRequestModuleBase],
  controllers: [QueryRequestController],
  providers: [QueryRequestService, QueryRequestResolver],
  exports: [QueryRequestService],
})
export class QueryRequestModule {}
