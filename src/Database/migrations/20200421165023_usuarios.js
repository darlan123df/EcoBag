
exports.up = function (knex) {
    return knex.schema.createTable('usuarios', function (table) {
        table.string('idUsuario').primary(); 

        table.string('nomeUsuario').notNullable();
        table.string('senhaUsuario').notNullable();
        
        table.string('alocacaoUsuario').notNullable();
        table.string('cpfUsuario').notNullable();
        table.string('telefoneUsuario').notNullable();

        table.foreign('alocacaoUsuario').references('idLoja').inTable('lojas');
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('usuarios');
};
