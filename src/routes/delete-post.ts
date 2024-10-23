import {
  FastifyInstance,
  FastifyReply,
  FastifyRequest,
  RouteOptions,
} from "fastify";

import * as postsModel from "../models/posts";
import { GetParamsSchema, GetParamsType } from "./schemas";

export default function getIndex(fastify: FastifyInstance): RouteOptions {
  return {
    method: "DELETE",
    url: "/posts/:id",
    schema: {
      params: GetParamsSchema
    },
    handler: async function (request: FastifyRequest, reply: FastifyReply) {
      const { id } = request.params as GetParamsType;
      await postsModel.deletePost(fastify, id);
      reply.code(204).send("Deleted succesfuly!🗑️");
    },
  };
}
