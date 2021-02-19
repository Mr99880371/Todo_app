const fetch = require("node-fetch")

function listaDeUsur() {
    return fetch('https://randomuser.me/api/?results=30')
        // .then(response => {
        //     return response.ok? response.json() : new Error("mal sucedido");
        // })
        // .then( data => {
        //     console.log(data.results);
        // })
}
listaDeUsur();

const gerarCSVusr = async() => {
    const usuarios = await listaDeUsur();
    const usuariosjson = await usuarios.json();
    console.log(usuariosjson);
}

gerarCSVusr();



// async function listaDeUsur(){
//     const url = 'https://randomuser.me/api/?results=30'
//     let respo = await fetch(url)

//     console.log(resp.json())
// }
// listaDeUsur()