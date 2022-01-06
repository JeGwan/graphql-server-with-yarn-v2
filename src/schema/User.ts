import { Field, Float, ObjectType } from "type-graphql";

@ObjectType()
class User {
  @Field()
  id!: string;

  @Field()
  firstName!: string;

  @Field()
  lastName!: string;

  @Field(() => [String])
  bothNonNull!: string[];

  @Field(() => [String], { nullable: true })
  arrNullable!: string[];

  @Field(() => [String], { nullable: "items" })
  itemNullabel!: string[];

  @Field(() => [String], { nullable: "itemsAndList" })
  itemAndArrNullable!: string[];

  @Field(() => Float, { nullable: true })
  get random() {
    return Math.random();
  }

  itsNotField?: string;

  @Field(() => String)
  get fullName() {
    return this.firstName + this.lastName;
  }
}

export default User;
