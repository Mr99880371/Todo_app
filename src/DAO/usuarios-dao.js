module.exports = class UsuariosDao {

    constructor(bd) {
        this.bd = bd;
    }
    listaUsuarios() {
        return new Promise((resolve, reject) => {
            this.bd.all("SELECT * FROM USUARIOS", (error, linhas) => {
                if (error) reject("Erro ao consultar usuários");
                else resolve(linhas);
            })
        })
    }
    buscaUsuarios(informacao) {
        return new Promise((resolve, reject) => {
            this.bd.all("SELECT * FROM USUARIOS WHERE ID = ?", informacao, (error, linhas) => {
                if (error) reject("Erro ao consultar o id do usuário");
                else resolve(linhas);
            })
        })
    }
    atualizaUsuarios(novo) {
        return new Promise((resolve, reject) => {
            this.bd.run("UPDATE USUARIOS SET NOME=?, EMAIL=?, SENHA=? WHERE ID= ?", novo, (error) => {
                if (error) reject("Erro ao atualizar usuários");
                else resolve("Usuário atualizado com sucesso");
            })

        })
    }
    deletaUsuarios(deleta) {
        return new Promise((resolve, reject) => {
            this.bd.all("DELETE FROM USUARIOS WHERE ID = ?", deleta, (error, linhas) => {
                if (error) reject("Erro ao deletar usuários");
                else resolve("Usuário deletado");
            })
        })
    }
    enviaUsuarios(envia) {
        return new Promise((resolve, reject) => {
            this.bd.all("INSERT INTO USUARIOS (NOME, EMAIL, SENHA) VALUES (?,?,?)", envia, (error, linhas) => {
                if (error) reject("Erro ao enviar usuários");
                else resolve("Novo usuário adicionado");
            })
        })
    }
}