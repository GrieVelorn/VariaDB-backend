const uuid = require("uuid");

exports.up = function (knex) {
    return knex.schema.createTable("decks", (tbl) => {
      tbl.string('deckGuid', 100);
      tbl.string("deckCode", 1000);
      tbl.timestamp('created_at').defaultTo(knex.fn.now())
    });
  };

exports.down = function (knex) {
    return knex.schema.dropTableIfExists("decks");
  };
  
