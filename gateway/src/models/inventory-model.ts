import { Field, ID, ObjectType } from "type-graphql";

@ObjectType({ description: "Inventory model" })
export class Inventory {
  @Field(type => ID)
  id: string;

  @Field(type => ID)
  productId: string;

  @Field(() => Number)
  quantity: number;

  @Field(() => String, { nullable: true })
  location: string;
}