import { Static, Type } from "@sinclair/typebox";

export const PostBodySchema = Type.Object({
  text: Type.String(),
  hashtags: Type.Optional(Type.Array(Type.String())),
  user_id: Type.Integer(),
});

export const SearchQuerySchema = Type.Object({
  text: Type.Optional(Type.String()),
  tag: Type.Optional(Type.String()),
});

export const GetParamsSchema = Type.Object({
  id: Type.Integer()
});

export type GetParamsType = Static<typeof GetParamsSchema>;
export type PostBodyType = Static<typeof PostBodySchema>;
export type SearchQueryType = Static<typeof SearchQuerySchema>;
