
exports.up = function(knex) {
    return knex.schema.createTable('emprestimos', function (table) {
        table.increments('idEmprestimo').primary();

        table.date('dataEmprestimo').notNullable();
        table.string('idLoja').notNullable();
        table.string('idEcoBag').notNullable();
        table.string('statusEmprestimo').notNullable();
        table.date('dataDevoluca');

        table.foreign('idLoja').references('idLoja').inTable('lojas');
        table.foreign('idEcoBag').references('idEcoBag').inTable('ecoBags');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('emprestimos');
};
