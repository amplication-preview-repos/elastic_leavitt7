import { Injectable } from "@nestjs/common";

@Injectable()
export class SqlTranslationService {
  constructor() {}
  async ExecuteSql(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async TranslateDescription(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
}
