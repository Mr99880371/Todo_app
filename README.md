# PROJETO API ToDo

Esse projeto tem por objetivo a implementação de uma API voltada para o gerenciamento de tarefas,
Ele foi desenvolvido ao longo do terceiro módulo no curso de desenvolvimento Web da Resilia Educação.

## 🚀 Começando

A seguir, essas instruções permitirão que você obtenha uma cópia do projeto em operação na sua máquina local para fins de desenvolvimento e teste.


### 📋 Pré-requisitos

Principais linguagens e frameworks utilizados nesse projeto:
- Javascript
- Node Js
- Gerenciador de pacotes do node, o NPM
- Express
- .gitignore(para ignorar os arquivos do node_modules)

### 🔧 Instalação

- Instale o Node Js
- Baixe os arquivos contidos nesse repositório
- dentro da pasta, inicialize o gerenciador de pacotes do node, o npm (com npm install - para que as dependências do projeto sejam atualizadas)
- inicie o projeto utilizando o comando 'npm start'


Abaixo as rotas de acesso utilizadas no projeto:

*** Usuarios
- GET
localhost:8080/usuarios - lista todos os usuários cadastrados.
localhost:8080/usuarios/id - lista o usuário associado á aquele determinado id.
- PUT 
localhost:8080/usuarios/id - atualiza as informações do usuário associado á aquele determinado id.
- POST
localhost:8080/usuarios - envia novas informações de um novo usuário para a lista.
- DELETE
localhost:8080/usuarios/id - deleta as informações associadas ao usuário daquele determinado id.

*** Tarefas
- GET 
localhost:8080/tarefas - lista todos as tarefas cadastradas.
localhost:8080/tarefas/id - lista a tarefa associada á aquele determinado id.
- PUT
localhost:8080/tarefas/id - atualiza as informações das tarefas associadas á aquele determinado id.
- POST
localhost:8080/tarefas - envia novas informações de uma nova tarefa para a lista.
- DELETE
localhost:8080/usuarios/id - deleta as tarefas associadas á aquele determinado id.


## 🛠️ Construído com

* NodeJS
* JavaScript
* Body-parser v1.19.0
* Cors v2.8.5
* Express v4.17.1
* Node-fetch v2.6.1
* SQLite3 v5.0.1

## 📌 Versão

Foi usado o GitHub para controle de versão desse projeto. Para as versões disponíveis, vá para https://github.com/Mr99880371/Todo_app. 

## ✒️ Autora

Mariane Araujo Justino

** Estudante de desenvolvimento web ** 
 - Link para o github: https://github.com/Mr99880371
 - Link para o Linkedin: https://www.linkedin.com/in/mariane-araujo-39815a195/
