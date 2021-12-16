import { Query, Resolver } from "type-graphql";

@Resolver()
class TestResolver {
  @Query(() => String)
  async helloWorld() {
    return "Hello ! World!";
  }
}

export default TestResolver;
