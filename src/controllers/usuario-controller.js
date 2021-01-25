const Usuarios = require('../models/usuarios');

module.exports = (app, bd) => {

    app.get('/usuarios', (req, resp) => {
            resp.send(bd.usuario);
        })
        //get mostra = 'select'
    app.get('/usuarios/:nome', (req, resp) => {
            for (let i of bd.usuario) {
                if (req.params.nome == i.nome) {
                    resp.send(i)
                }
            }
        })
        //post envia = 'insert'
    app.post('/usuarios', (req, resp) => {
        const usr = new Usuarios(req.body.nome, req.body.email, req.body.senha)
        bd.usuario.push(usr)
        console.log(bd)
        resp.send("Ok");
    })
    app.delete('/usuarios/:nome', (req, resp) => {
        for (let i = 0; i < bd.usuario; i++) {
            if (req.params.nome == nome[i]) {
                bd.usuario.splice(i, 1)
                console.log(i)
                resp.send('removido com sucesso')
            }
        }
    })
    app.put('/usuarios/:nome', (req, resp) => {
        for (let i of bd.usuario) {
            if (req.params.nome == i.nome) {
                i.nome = req.body.nome
                resp.send('atualizado com sucesso')
            }
        }
    })

}