import { Arg, Ctx, Mutation, Query, Resolver } from "type-graphql";

import { CreateUserInput } from "../schema/InputTypes";
import User from "../schema/User";
import { AppContext } from "../types";

const DEFAULT_FIELDS: Omit<User, "fullName" | "random"> = {
  id: "",
  firstName: "",
  lastName: "",
  arrNullable: [],
  bothNonNull: [],
  itemAndArrNullable: [],
  itemNullabel: [],
};
const users: Omit<User, "fullName" | "random">[] = [
  {
    id: "1",
    firstName: "JeGwan",
    lastName: "O",
    arrNullable: [],
    bothNonNull: [],
    itemAndArrNullable: [],
    itemNullabel: [],
  },
  {
    id: "2",
    firstName: "GilDong",
    lastName: "Hong",
    arrNullable: [],
    bothNonNull: [],
    itemAndArrNullable: [],
    itemNullabel: [],
  },
];
@Resolver()
class TestResolver {
  @Query(() => String)
  async helloWorld() {
    return "Hello ! World!";
  }

  @Query(() => User)
  async user(
    @Arg("id") id: string,
    @Arg("withStatics", { defaultValue: false }) withStatics: boolean = false,
    @Arg("name", { nullable: true }) name?: string
  ) {
    return users.find((user) => user.id === id);
  }

  @Mutation(() => User)
  async createUser(
    @Ctx() ctx: AppContext,
    @Arg("data") { firstName, lastName }: CreateUserInput
  ) {
    console.log(ctx);
    const user = {
      ...DEFAULT_FIELDS,
      firstName,
      lastName,
      id: (users.length + 1).toString(),
    };
    users.push(user);
    return user;
  }
}

export default TestResolver;
