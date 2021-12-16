import "reflect-metadata";
import { ApolloServerPluginDrainHttpServer } from "apollo-server-core";
import { ApolloServer } from "apollo-server-express";
import express from "express";
import http from "http";
import path from "path";
import { buildSchema } from "type-graphql";

import { DEFAULT_PORT } from "./constants";

async function startApolloServer() {
  const PORT = process.env.PORT || DEFAULT_PORT;
  const app = express();
  const httpServer = http.createServer(app);
  const schema = await buildSchema({
    resolvers: [path.join(__dirname, `resolvers/**/*`)],
  });
  const server = new ApolloServer({
    schema,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });
  await server.start();
  server.applyMiddleware({ app });
  httpServer.listen({ port: PORT }, () =>
    console.log(
      `🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`
    )
  );
}
startApolloServer();
