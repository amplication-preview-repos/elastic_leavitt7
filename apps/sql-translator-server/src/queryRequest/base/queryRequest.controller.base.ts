/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { QueryRequestService } from "../queryRequest.service";
import { QueryRequestCreateInput } from "./QueryRequestCreateInput";
import { QueryRequest } from "./QueryRequest";
import { QueryRequestFindManyArgs } from "./QueryRequestFindManyArgs";
import { QueryRequestWhereUniqueInput } from "./QueryRequestWhereUniqueInput";
import { QueryRequestUpdateInput } from "./QueryRequestUpdateInput";
import { ExecutionResultFindManyArgs } from "../../executionResult/base/ExecutionResultFindManyArgs";
import { ExecutionResult } from "../../executionResult/base/ExecutionResult";
import { ExecutionResultWhereUniqueInput } from "../../executionResult/base/ExecutionResultWhereUniqueInput";

export class QueryRequestControllerBase {
  constructor(protected readonly service: QueryRequestService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: QueryRequest })
  async createQueryRequest(
    @common.Body() data: QueryRequestCreateInput
  ): Promise<QueryRequest> {
    return await this.service.createQueryRequest({
      data: data,
      select: {
        createdAt: true,
        description: true,
        id: true,
        translatedSql: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [QueryRequest] })
  @ApiNestedQuery(QueryRequestFindManyArgs)
  async queryRequests(@common.Req() request: Request): Promise<QueryRequest[]> {
    const args = plainToClass(QueryRequestFindManyArgs, request.query);
    return this.service.queryRequests({
      ...args,
      select: {
        createdAt: true,
        description: true,
        id: true,
        translatedSql: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: QueryRequest })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async queryRequest(
    @common.Param() params: QueryRequestWhereUniqueInput
  ): Promise<QueryRequest | null> {
    const result = await this.service.queryRequest({
      where: params,
      select: {
        createdAt: true,
        description: true,
        id: true,
        translatedSql: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: QueryRequest })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateQueryRequest(
    @common.Param() params: QueryRequestWhereUniqueInput,
    @common.Body() data: QueryRequestUpdateInput
  ): Promise<QueryRequest | null> {
    try {
      return await this.service.updateQueryRequest({
        where: params,
        data: data,
        select: {
          createdAt: true,
          description: true,
          id: true,
          translatedSql: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: QueryRequest })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteQueryRequest(
    @common.Param() params: QueryRequestWhereUniqueInput
  ): Promise<QueryRequest | null> {
    try {
      return await this.service.deleteQueryRequest({
        where: params,
        select: {
          createdAt: true,
          description: true,
          id: true,
          translatedSql: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/:id/executionResults")
  @ApiNestedQuery(ExecutionResultFindManyArgs)
  async findExecutionResults(
    @common.Req() request: Request,
    @common.Param() params: QueryRequestWhereUniqueInput
  ): Promise<ExecutionResult[]> {
    const query = plainToClass(ExecutionResultFindManyArgs, request.query);
    const results = await this.service.findExecutionResults(params.id, {
      ...query,
      select: {
        createdAt: true,
        id: true,

        queryRequest: {
          select: {
            id: true,
          },
        },

        result: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/executionResults")
  async connectExecutionResults(
    @common.Param() params: QueryRequestWhereUniqueInput,
    @common.Body() body: ExecutionResultWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      executionResults: {
        connect: body,
      },
    };
    await this.service.updateQueryRequest({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/executionResults")
  async updateExecutionResults(
    @common.Param() params: QueryRequestWhereUniqueInput,
    @common.Body() body: ExecutionResultWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      executionResults: {
        set: body,
      },
    };
    await this.service.updateQueryRequest({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/executionResults")
  async disconnectExecutionResults(
    @common.Param() params: QueryRequestWhereUniqueInput,
    @common.Body() body: ExecutionResultWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      executionResults: {
        disconnect: body,
      },
    };
    await this.service.updateQueryRequest({
      where: params,
      data,
      select: { id: true },
    });
  }
}