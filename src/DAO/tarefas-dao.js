module.exports = class TarefasDao {

    constructor(bd) {
        this.bd = bd;
    }
    listaTarefas() {
        return new Promise((resolve, reject) => {
            this.bd.all("SELECT * FROM TAREFAS", (error, linhas) => {
                if (error) reject("Erro ao consultar tarefas");
                else resolve(linhas);
            })
        })

    }
    buscaTarefas(info) {
        return new Promise((resolve, reject) => {
            this.bd.all("SELECT * FROM TAREFAS WHERE ID = ?", info, (error, linhas) => {
                if (error) reject("Erro ao consultar o id da tarefa");
                else resolve(linhas);
            })
        })

    }

    atualizaTarefas(parametro) {
        return new Promise((resolve, reject) => {
            this.bd.all("UPDATE TAREFAS SET TITULO = ?, DESCRICAO = ?, STATUS = ?, DATACRIACAO = ?, ID_USUARIO = ? WHERE ID = ?", parametro, (error, linhas) => {
                if (error) reject("Erro ao atualizar tarefas");
                else resolve("Tarefas atualizadas com sucesso");
            })

        })
    }
    deletaTarefas(del) {
        return new Promise((resolve, reject) => {
            this.bd.all("DELETE FROM TAREFAS WHERE ID = ?", del, (error, linhas) => {
                if (error) reject("Erro ao deletar tarefas");
                else resolve("Dados deletados com sucesso");
            })
        })
    }
    enviaTarefa(dados) {
        return new Promise((resolve, reject) => {
            this.bd.run("INSERT INTO TAREFAS (TITULO, DESCRICAO, STATUS, DATACRIACAO, ID_USUARIO) VALUES (?, ?, ?, ?, ?)", dados, (error, linhas) => {
                if (error) reject("Erro ao enviar tarefas");
                else resolve("Informações enviadas com sucesso");
            })
        })
    }
}