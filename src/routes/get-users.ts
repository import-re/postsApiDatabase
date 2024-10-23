import {
    FastifyInstance,
    FastifyReply,
    FastifyRequest,
    RouteOptions,
  } from "fastify";
  
  import * as userModel from "../models/users";
  
  export default function getIndex(fastify: FastifyInstance): RouteOptions {
    return {
      method: "GET",
      url: "/users",
      handler: async function (request: FastifyRequest, reply: FastifyReply) {
        const users = await userModel.getUsers(fastify);
        reply.send(users);
      },
    };
  }
  