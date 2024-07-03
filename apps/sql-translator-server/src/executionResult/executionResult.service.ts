import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ExecutionResultServiceBase } from "./base/executionResult.service.base";

@Injectable()
export class ExecutionResultService extends ExecutionResultServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
