const express = require('express');
const bodyParser = require('body-parser');
const usuariosController = require('./controllers/usuario-controller');
const tarefaController = require('./controllers/tarefa-controller');

const banco = require('./infra/bd');
console.log(banco)

// const Usuarios = require('./src/models/usuarios');
// const user = new Usuarios("Mariane", "marianearaujo342@yahoo.com.br", "ajlalkdhkdhjka");
// console.log(user);

// const Tarefas = require('./src/models/tarefas');
// const tarefa = new Tarefas("O lá", "saudacões", "ativo", "2021-01-19");
// console.log(tarefa);

const app = express()
const port = 8080;
app.use(bodyParser.json());

usuariosController(app, banco);
tarefaController(app, banco);

app.listen(port, () => {
    console.log(`[INFO]: Servidor rodando em http://localhost:${port}`)
})