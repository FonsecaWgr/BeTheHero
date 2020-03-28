const express = require('express');

const app = express();

app.get('/', (req, res) => {
    return res.json({
        evento: 'Curso',
        aluno: 'Wagner'
    });
});

app.listen(3333);