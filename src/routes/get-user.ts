import {
  FastifyInstance,
  FastifyReply,
  FastifyRequest,
  RouteOptions,
} from "fastify";

import * as userModel from "../models/users";
import { GetParamsSchema, GetParamsType } from "./schemas";

export default function getIndex(fastify: FastifyInstance): RouteOptions {
  return {
    method: "GET",
    url: "/users/:id",
    schema: {
      params: GetParamsSchema
    },
    handler: async function (request: FastifyRequest, reply: FastifyReply) {
      const { id } = request.params as GetParamsType;
      const user = await userModel.getUser(fastify, id);
      if (user === null) reply.code(404).send("Not found!😱")
      reply.send(user);
    },
  };
}
