const express = require('express');

//desacoplando o modulo express.Router para a variavel routes
const routes = express.Router();

routes.post('/users', (req, res) => {

    const body = req.body;
    return res.json({
        evento: 'Curso',
        aluno: 'Wagner'
    });
});

//exportando o routes para os outros arquivos terem acesso a ele
module.exports = routes;