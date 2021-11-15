const db = require("../../data/knex.js");

const login = async (username) => {
  return await db("users as u")
    .select("u.id", "u.username", "u.password")
    .where({ username: username });
};
function add(user) {
  return db("users").insert(user, "id");
}
const findAll = async () => {
  return await db("users").select("*");
};

const findBy = (filter) => {
  return db("users").where(filter);
};

const findById = (id) => {
  return db("users").where({ id }).first().select("*");
};

const create = (ex) => {
  return db("users").insert(ex).returning("*");
};

const update = (id, ex) => {
  return db("users").where({ id: id }).first().update(ex).returning("*");
};

const remove = (id) => {
  return db("users").where({ id }).del();
};

//added queries
const findAllNestedData = async () => {
  const user = await db("users as u").select("*").orderBy("u.id");
  const customer = await db("customers").select("*");

  const arr = [];

  user.forEach((e) => {
    arr.push({
      userInfo: e,
      accounts: customer.filter((j) => {
        if (e.id === parseInt(j.user_id)) {
          return j;
        }
      }),
    });
  });

  return arr;
};

const findAllCustomersByUserId = async (id) => {
  const user = await db("users").select("*").where("id", id);
  const userDetails = {
    ...user,
    accounts: await db("customers").select("*").where({ user_id: id }),
  };
  return userDetails;
};

module.exports = {
  login,
  add,
  findAll,
  findBy,
  findById,
  create,
  update,
  remove,
  findAllNestedData,
  findAllCustomersByUserId,
};
