import { Field, ID, ObjectType } from "type-graphql";

@ObjectType({ description: "Inventory model" })
export class Product {
  @Field(type => ID)
  id: string;

  @Field(() => String)
  title: string;

  @Field(() => String)
  description: string;

  @Field(() => Number)
  price: number;

  @Field(() => String)
  image: string;
}