
exports.up = function (knex) {
    return knex.schema.createTable('ecoBags', function (table) {
        table.increments('idEcoBag').primary();

        table.string('localOrigemEcoBag').notNullable();
        table.string('localDevolvido').notNullable();
        table.string('statusEcoBag', 2).notNullable();

        table.foreign('localDevolvido').references('idLoja').inTable('lojas');
    });

};

exports.down = function (knex) {
    return knex.schema.dropTable('ecoBags');
};
