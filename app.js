const express = require('express');
const usuariosController = require('./controllers/tarefas-controller');

const port = 3080;

const app = express();

usuariosController(app)

app.listen(port, () => console.log('[INFO]: servidor rodando em localhost:${port}'))
    // let obj = {};

// function modificaObjeto(objetoQualquer) {
//     objetoQualquer.nome = "resilia";
//     objetoQualquer.curso = "webdev";
// }
// modificaObjeto(obj);

// console.log(obj);