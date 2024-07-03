import { Module } from "@nestjs/common";
import { SqlTranslationService } from "./sqltranslation.service";
import { SqlTranslationController } from "./sqltranslation.controller";
import { SqlTranslationResolver } from "./sqltranslation.resolver";

@Module({
  controllers: [SqlTranslationController],
  providers: [SqlTranslationService, SqlTranslationResolver],
  exports: [SqlTranslationService],
})
export class SqlTranslationModule {}
