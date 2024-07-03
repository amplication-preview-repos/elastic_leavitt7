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
import { ExecutionResultWhereInput } from "./ExecutionResultWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { ExecutionResultOrderByInput } from "./ExecutionResultOrderByInput";

@ArgsType()
class ExecutionResultFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => ExecutionResultWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => ExecutionResultWhereInput, { nullable: true })
  @Type(() => ExecutionResultWhereInput)
  where?: ExecutionResultWhereInput;

  @ApiProperty({
    required: false,
    type: [ExecutionResultOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [ExecutionResultOrderByInput], { nullable: true })
  @Type(() => ExecutionResultOrderByInput)
  orderBy?: Array<ExecutionResultOrderByInput>;

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

export { ExecutionResultFindManyArgs as ExecutionResultFindManyArgs };
