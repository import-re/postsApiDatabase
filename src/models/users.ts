import { FastifyInstance } from "fastify";
const TABLE_NAME = "users";

export interface User {
  id: number;
  username: string;
  bio?: string;
};

export interface UserDTO {
  id: number;
  username: string;
  bio?: string;
};

interface UserEntity {
  id: number,
  username: string,
  bio?: string
};

const formatUserDTO = (userEntity: UserEntity): UserDTO => {
  return {
    id: userEntity.id,
    username: userEntity.username,
    bio: userEntity.bio,
  };
};

export async function getUsers(
  fastify: FastifyInstance
): Promise<UserDTO[] | null> {
  const data: UserEntity[] = await fastify.tars.from(TABLE_NAME).select();
  return data.map(formatUserDTO);
}

export async function getUser(
  fastify: FastifyInstance,
  id: number
): Promise<UserDTO | null> {
  const data: UserEntity[] = await fastify.tars.from(TABLE_NAME).select().where({ id });
  if (data.length == 0) return null;
  return data.map(formatUserDTO)[0];
}