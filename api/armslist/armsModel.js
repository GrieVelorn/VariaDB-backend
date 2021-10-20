const db = require("../../data/knex.js");

const findAll = async () => {
  return await db("armslist").select("*");
};

const create = async (ex) => {
  return await db("armslist").insert(ex).returning("*");
};

module.exports = {
  findAll,
  create,
};
