import "reflect-metadata";
import { ApolloServer } from "@apollo/server";
import { buildSchema } from "type-graphql";
import { ProductResolver } from "./resolvers/product-resolver";
import { startStandaloneServer } from "@apollo/server/standalone";

async function bootstrap() {
  const schema = await buildSchema({
    resolvers: [
      ProductResolver
    ]
  });

  const server = new ApolloServer({
    schema
  });

  const { url } = await startStandaloneServer(server, {
    listen: {
      port: 4002
    },
  });

  console.log(`🚀 Server ready at ${url}`);
}

bootstrap();