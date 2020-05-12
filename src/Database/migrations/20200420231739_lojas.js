
exports.up = function(knex) {
    return knex.schema.createTable('lojas', function (table){
        table.increments('idLoja').primary();

        table.string('cnpj').notNullable();
        table.string('razaoSocial').notNullable();
        table.string('enderecoLoja').notNullable();
        table.string('telefoneLoja').notNullable();
        table.string('emailLoja').notNullable();
    });
  
};

exports.down = function(knex) {
    return knex.schema.dropTable('lojas');
};
