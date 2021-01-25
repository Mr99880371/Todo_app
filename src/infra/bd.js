const Usuarios = require('../models/usuarios');
const Tarefas = require('../models/tarefas');
module.exports = {
    usuario: [new Usuarios(`joão`, `mariahsk@hotmail.com`, `123456789`), new Usuarios(`Maria`, `kkdkenlk@hotmail.com`, `123456`), new Usuarios(`Mariana`, `nsjjenlk@hotmail.com`, `123456897`)],
    tarefas: [new Tarefas(`O lá`, `saudacões`, `ativo`, `19-01-2021`), new Tarefas(`hello`, `greetings`, `active`, `19-01-2020`), new Tarefas(`Ola`, `saudaciones`, `inativo`, `19-01-2019`)]
}