const Tarefas = require('../models/tarefas');

module.exports = (app, bd) => {

    app.get('/tarefas', (req, resp) => {
            resp.send(bd.tarefas);
        })
        //get mostra = 'select'
    app.get('/tarefas/:status', (req, resp) => {
            for (let i of bd.tarefas) {
                if (req.params.status == i.status) {
                    resp.send(i)
                }
            }
        })
        //post envia = 'insert'
    app.post('/tarefas', (req, resp) => {
        const trf = new Tarefas(req.body.titulo, req.body.descricao, req.body.status, req.body.dataDeDescricao)
        bd.usuario.push(trf)
        console.log(bd)
        resp.send("Ok");
    })
    app.delete('/tarefas/:titulo', (req, resp) => {
        for (let i = 0; i < bd.titulo; i++) {
            if (req.params.titulo == titulo[i]) {
                bd.tarefas.splice(i, 1)
                console.log(i)
                resp.send('removido com sucesso')
            }
        }
    })
    app.put('/tarefas/:titulo', (req, resp) => {
            for (let i of bd.tarefas) {
                if (req.params.titulo == i.titulo) {
                    i.titulo = req.body.titulo
                    resp.send('atualizado com sucesso')
                }
            }
        })
        // app.get('/tarefas', (req, resp) => {
        //     resp.send(bd.tarefas);
        // });

    // app.post('/tarefas', (req, resp) => {
    //     const trf = new Tarefas(req.body.titulo, req.body.descricao, req.body.status, req.body.dataDeDescricao)
    //     bd.tarefas.push(trf)
    //     console.log(bd)
    //     resp.send("Ok");
    // })
}