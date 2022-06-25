exports.up = function (knex) {
    return knex.schema.createTable("decks", (tbl) => {
      tbl.increments("id");
      tbl.string("deckGUID", 1000);
      tbl.string("deckBase64", 1000);
      tbl.string("player_ID", 100);
    });
  };

exports.down = function (knex) {
    return knex.schema.dropTableIfExists("cards");
  };
  
