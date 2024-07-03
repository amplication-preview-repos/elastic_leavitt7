import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { QueryRequestServiceBase } from "./base/queryRequest.service.base";

@Injectable()
export class QueryRequestService extends QueryRequestServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
