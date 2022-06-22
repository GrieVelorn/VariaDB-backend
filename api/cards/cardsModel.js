const db = require("../../data/knex.js");

const findAll = async () => {
  return await db("cards").select("*");
};

const create = (ex) => {
  return db("cards").insert(ex).returning("*");
};
const findById = (id) => {
  return db("cards").where({ id }).first().select("*");
};

const remove = (id) => {
  return db("cards").where({ id }).del();
};

module.exports = {
  findAll,
  create,
  remove,
  findById,
};
