const db = require("../../data/knex.js");

const findAll = async () => {
  return await db("store").select("*");
};

const create = (ex) => {
  return db("store").insert(ex).returning("*");
};
const findById = (id) => {
  return db("store").where({ id }).first().select("*");
};

const remove = (id) => {
  return db("store").where({ id }).del();
};

module.exports = {
  findAll,
  create,
  remove,
  findById,
};
