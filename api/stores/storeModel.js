const db = require("../../data/knex.js");

const findAll = async () => {
  return await db("stores").select("*");
};

const create = (ex) => {
  return db("stores").insert(ex).returning("*");
};
const findById = (id) => {
  return db("stores").where({ id }).first().select("*");
};

const remove = (id) => {
  return db("stores").where({ id }).del();
};

module.exports = {
  findAll,
  create,
  remove,
  findById,
};
