/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { QueryRequestWhereInput } from "./QueryRequestWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { QueryRequestOrderByInput } from "./QueryRequestOrderByInput";

@ArgsType()
class QueryRequestFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => QueryRequestWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => QueryRequestWhereInput, { nullable: true })
  @Type(() => QueryRequestWhereInput)
  where?: QueryRequestWhereInput;

  @ApiProperty({
    required: false,
    type: [QueryRequestOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [QueryRequestOrderByInput], { nullable: true })
  @Type(() => QueryRequestOrderByInput)
  orderBy?: Array<QueryRequestOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { QueryRequestFindManyArgs as QueryRequestFindManyArgs };