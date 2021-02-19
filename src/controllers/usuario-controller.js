const UsuariosDao = require('../DAO/usuarios-dao');

module.exports = (app, bd) => {

    const DaoUsuarios = new UsuariosDao(bd)
    app.get('/usuarios', async(req, resp) => {
        try {
            let listaDeUsuarioRetorno = await DaoUsuarios.listaUsuarios()
            resp.send(listaDeUsuarioRetorno)
        } catch (erro) {
            resp.send(erro);
        }

    })
    app.get('/usuarios/:id', async(req, resp) => {
            try {
                let buscaUser = await DaoUsuarios.buscaUsuarios(req.params.id);
                resp.send(buscaUser);
            } catch (erro) {
                resp.send(erro);
            }
        })
        //post envia = 'insert/creat'
    app.post('/usuarios', async(req, resp) => {
        let inf = [
            req.body.nome,
            req.body.email,
            req.body.senha,
        ]
        try {
            let enviodainfo = await DaoUsuarios.enviaUsuarios(inf);
            resp.send(enviodainfo);
        } catch (erro) {
            resp.send(erro);
        }
    })

    //delete deleta os dados = 'delete'
    app.delete('/usuarios/:id', async(req, resp) => {
            try {
                let userdeletado = await DaoUsuarios.deletaUsuarios(req.params.id);
                resp.send(userdeletado);
            } catch (erro) {
                resp.send(erro);
            }
        })
        //atualiza os dados = 'update'
    app.put('/usuarios/:id', async(req, resp) => {
        let usrDados = [
            req.body.nome,
            req.body.email,
            req.body.senha,
            req.params.id
        ]
        try {
            let useratualizado = await DaoUsuarios.atualizaUsuarios(usrDados);
            resp.send(useratualizado);
        } catch (erro) {
            resp.send(erro);
        }
    })

}