exports.up = function (knex) {
  return knex.schema.createTable("cards", (tbl) => {
    tbl.increments("id");
    tbl.string("Card_Name");
    tbl.string("Card_Type");
    tbl.string("Cost");
    tbl.string("Power");
    tbl.string("Focus");
    tbl.string("Rules");
    tbl.string("Attribute");
    tbl.string("Attribute_Requirement");
    tbl.string("Supertype");
    tbl.string("Subtype");
    tbl.string("Card_Number");
    tbl.string("Art");
    tbl.string("guid");
    tbl.string("fileloc");
    tbl.string("sortID");
    tbl.string("product");
    tbl.string("proCount");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("cards");
};
