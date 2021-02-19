const TarefasDao = require('../DAO/tarefas-dao');

module.exports = (app, bd) => {
    const DaoTarefas = new TarefasDao(bd)
    app.get('/tarefas', async(req, resp) => {
            try {
                let tarefasDeRetorno = await DaoTarefas.listaTarefas();
                resp.send(tarefasDeRetorno);
            } catch (erro) {
                resp.send(erro);
            }

        })
        //get mostra = 'select/read'
    app.get('/tarefas/:id', async(req, resp) => {
            try {
                let buscaTrf = await DaoTarefas.buscaTarefas(req.params.id);
                resp.send(buscaTrf);
            } catch (erro) {
                resp.send(erro);
            }
        })
        //post envia = 'insert/creat'
    app.post('/tarefas', async(req, resp) => {
        let dados = [
            req.body.titulo,
            req.body.descricao,
            req.body.status,
            req.body.dataCriacao,
            req.body.id_usuario
        ]
        try {
            let enviodatarefa = await DaoTarefas.enviaTarefa(dados);
            resp.send(enviodatarefa);
        } catch (erro) {
            resp.send(erro);
        }
    })

    //delete deleta os dados = 'delete'
    app.delete('/tarefas/:id', async(req, resp) => {
            try {
                let tarefadeletada = await DaoTarefas.deletaTarefas(req.params.id);
                resp.send(tarefadeletada);
            } catch (erro) {
                resp.send(erro);
            }
        })
        //atualiza os dados = 'update'
    app.put('/tarefas/:id', async(req, resp) => {
        let parametros = [
            req.body.titulo,
            req.body.descricao,
            req.body.status,
            req.body.dataCriacao,
            req.body.id_usuario,
            req.params.id
        ]
        try {
            let tarefasAtualiza = await DaoTarefas.atualizaTarefas(parametros);
            resp.send(tarefasAtualiza);
        } catch (erro) {
            resp.send(erro);
        }
    })

}