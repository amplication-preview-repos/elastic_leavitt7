import { Module } from "@nestjs/common";
import { ExecutionResultModuleBase } from "./base/executionResult.module.base";
import { ExecutionResultService } from "./executionResult.service";
import { ExecutionResultController } from "./executionResult.controller";
import { ExecutionResultResolver } from "./executionResult.resolver";

@Module({
  imports: [ExecutionResultModuleBase],
  controllers: [ExecutionResultController],
  providers: [ExecutionResultService, ExecutionResultResolver],
  exports: [ExecutionResultService],
})
export class ExecutionResultModule {}
