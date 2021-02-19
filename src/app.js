const express = require('express');
const bodyParser = require('body-parser');
const usuariosController = require('./controllers/usuario-controller');
const tarefaController = require('./controllers/tarefa-controller');

const bd = require('./infra/sqlite-db');

const cors = require('cors');

const app = express()
const port = 8080;
app.use(bodyParser.json());

usuariosController(app, bd);
tarefaController(app, bd);

app.listen(port, () => {
    console.log(`[INFO]: Servidor rodando em http://localhost:${port}`)
})