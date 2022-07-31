const uuid = require("uuid");

exports.up = function (knex) {
  return knex.schema.createTable("players", (tbl) => {
    tbl.string("playerGuid", 100);
    tbl.string("playerName", 100);
    tbl.string("gamesPlayed", 100);
    tbl.string("playerGHG", 1000);
    tbl.timestamp("created_at").defaultTo(knex.fn.now());
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("players");
};
