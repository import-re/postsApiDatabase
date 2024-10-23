import {
  FastifyInstance,
  FastifyReply,
  FastifyRequest,
  RouteOptions,
} from "fastify";

import * as postsModel from "../models/posts";
import { SearchQuerySchema, SearchQueryType } from "./schemas";

export default function getIndex(fastify: FastifyInstance): RouteOptions {
  return {
    method: "GET",
    url: "/posts",
    schema: {
      querystring: SearchQuerySchema,
    },
    handler: async function (request: FastifyRequest, reply: FastifyReply) {
      const query = request.query as SearchQueryType;
      const posts = await postsModel.getPosts(fastify, query);
      reply.send(posts);
    },
  };
}
