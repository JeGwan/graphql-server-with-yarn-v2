import { FieldResolver, Resolver, Root } from "type-graphql";

import User from "../schema/User";

@Resolver((of) => User)
class UserFieldResolver {
  @FieldResolver(() => String)
  starredName(@Root() user: User) {
    return `⭐${user.firstName}⭐${user.lastName}⭐`;
  }
}

export default UserFieldResolver;
