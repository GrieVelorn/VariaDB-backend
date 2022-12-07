const db = require("../../data/knex.js");

const findAll = async () => {
  return await db("store").select("*");
};

const create = (ex) => {
  return db("store").insert(ex).returning("*");
};

const findById = (id, val) => {
  return db("store").where(id, "=", val).first().select("*");
};

const update = (id, val, ex) => {
  return db("store").where(id, "=", val).first().update(ex).returning("*");
};

const remove = (id, val) => {
  return db("store").where(id, "=", val).del();
};

module.exports = {
  findAll,
  create,
  remove,
  findById,
  update,
};
