import { Knex } from "knex";
import { usersSeedData, postsSeedData } from "../data-for-seeding";

export async function seed(knex: Knex) {
  await knex("users").insert(usersSeedData);
  await knex("posts").insert(postsSeedData);
}
