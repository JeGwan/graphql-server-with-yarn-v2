import { Field, InputType } from "type-graphql";
import User from "./User";

@InputType({ description: "Create user input" })
export class CreateUserInput implements Partial<User> {
  @Field()
  firstName!: string;

  @Field()
  lastName!: string;
}
