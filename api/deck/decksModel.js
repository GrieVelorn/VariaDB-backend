const db = require("../../data/knex.js");

const findAll = async () => {
  return await db("decks").select("*");
};

const create = (ex) => {
  return db("decks").insert(ex).returning("*");
};
const findById = (id) => {
  return db("decks").where({ id }).first().select("*");
};

const remove = (id) => {
  return db("decks").where({ id }).del();
};

module.exports = {
  findAll,
  create,
  remove,
  findById,
};
