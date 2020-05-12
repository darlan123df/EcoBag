const connnection = require('../Database/connection');

module.exports = {
    async listaLojas(request, response){
        const lojas = await connnection('lojas').select('*');

        return response.json(lojas);
    },

    async cadastrarLojas(request, response){
        const {cnpj, razaoSocial, enderecoLoja, telefoneLoja, emailLoja } = request.body;


        const lojas = await connnection('lojas').insert({
            cnpj,
            razaoSocial,
            enderecoLoja,
            telefoneLoja,
            emailLoja,
        });

        return response.json(lojas);
    }
};