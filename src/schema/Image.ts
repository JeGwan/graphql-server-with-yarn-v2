import { Field, ObjectType } from "type-graphql";

@ObjectType()
class Image {
  @Field()
  id!: string;
  @Field()
  url!: string;
}

export default Image;
