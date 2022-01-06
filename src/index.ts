import "reflect-metadata";
import "./config/env";

import { ApolloServerPluginDrainHttpServer } from "apollo-server-core";
import { ApolloServer } from "apollo-server-express";
import express from "express";
import http from "http";
import path from "path";
import { buildSchema } from "type-graphql";

import { DEFAULT_PORT } from "./constants";
import { AppContext } from "./types";

async function startApolloServer() {
  const PORT = process.env.PORT || DEFAULT_PORT;
  const app = express();
  const httpServer = http.createServer(app);
  const schema = await buildSchema({
    resolvers: [path.join(__dirname, `resolvers/**/*`)],
    emitSchemaFile: {
      commentDescriptions: true,
      // for dist folder access
      path: path.join(__dirname, "../src/generated/schema.gql"),
      sortedSchema: true,
    },
  });
  const server = new ApolloServer({
    schema,
    context: (ctx): AppContext => {
      return {
        headers: ctx.req.headers,
      };
    },
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });
  await server.start();
  server.applyMiddleware({ app });
  httpServer.listen({ port: PORT }, () =>
    console.info(
      `🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`
    )
  );
}

startApolloServer();
