const crypto = require('crypto');
const connnection = require('../Database/connection');

module.exports = {
    async cadastrarUsuarios(request, response) {
        const {
            nomeUsuario,
            senhaUsuario,
            alocacaoUsuario,
            cpfUsuario,
            telefoneUsuario
        } = request.body;

        const idUsuario = crypto.randomBytes(4).toString('HEX');

        const usuarios  = await connnection('usuarios').insert({
            idUsuario,
            nomeUsuario,
            senhaUsuario,
            alocacaoUsuario,
            cpfUsuario,
            telefoneUsuario,
        });

        return response.json(usuarios);
    },


    async listarUsuarios(request, response){
        const usuarios = await connnection('usuarios').select('*');

        return response.json(usuarios);
    }
};