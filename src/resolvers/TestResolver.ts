import { Arg, Query, Resolver } from "type-graphql";

import User from "../schema/User";

const users: Omit<User, "fullName">[] = [
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
}

export default TestResolver;
