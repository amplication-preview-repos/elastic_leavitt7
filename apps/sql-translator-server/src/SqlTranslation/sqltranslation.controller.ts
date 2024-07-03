import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { SqlTranslationService } from "./sqltranslation.service";

@swagger.ApiTags("sqlTranslations")
@common.Controller("sqlTranslations")
export class SqlTranslationController {
  constructor(protected readonly service: SqlTranslationService) {}

  @common.Post("/execute-sql")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async ExecuteSql(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.ExecuteSql(body);
      }

  @common.Post("/translate-description")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async TranslateDescription(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.TranslateDescription(body);
      }
}
