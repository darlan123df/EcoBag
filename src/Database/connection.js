const knex = require('knex'); //Importando o knex
const configuration  = require('../../knexfile'); //impotando o arquivo de configuração do knex

const connection = knex(configuration.development);

module.exports = connection;// exporta as configurações.