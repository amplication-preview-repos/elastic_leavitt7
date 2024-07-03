import * as graphql from "@nestjs/graphql";
import { SqlTranslationService } from "./sqltranslation.service";

export class SqlTranslationResolver {
  constructor(protected readonly service: SqlTranslationService) {}

  @graphql.Mutation(() => String)
  async ExecuteSql(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.ExecuteSql(args);
  }

  @graphql.Mutation(() => String)
  async TranslateDescription(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.TranslateDescription(args);
  }
}
