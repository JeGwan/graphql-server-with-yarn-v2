import { Field, ObjectType } from "type-graphql";

@ObjectType()
class User {
  @Field()
  id!: string;

  @Field()
  firstName!: string;

  @Field()
  lastName!: string;

  @Field(() => String)
  get fullName() {
    return this.firstName + this.lastName;
  }
}

export default User;
