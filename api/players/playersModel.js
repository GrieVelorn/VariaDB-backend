const db = require("../../data/knex.js");

const findAll = async () => {
  return await db("players").select("*");
};

const create = (ex) => {
  return db("players").insert(ex).returning("*");
};
const findById = (playerGuid) => {
  return db("players").where({ playerGuid }).first().select("*");
};

const remove = (id) => {
  return db("players").where({ id }).del();
};

module.exports = {
  findAll,
  create,
  remove,
  findById,
};
