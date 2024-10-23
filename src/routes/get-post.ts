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
    method: "GET",
    url: "/posts/:id",
    schema: {
      params: GetParamsSchema
    },
    handler: async function (request: FastifyRequest, reply: FastifyReply) {
      const { id } = request.params as GetParamsType;
      const post = await postsModel.getPost(fastify, id);
      if (post === null) reply.code(404).send("Not found!😱")
      reply.send(post);
    },
  };
}
