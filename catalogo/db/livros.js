const knex = require("./knex");

function criaLivro(livro){
    return knex("teste").insert(livro);
}

function selectLivros(){
    return knex("teste").select("*");
}

function deletaLivro(id){
    return knex("teste").del();
}

function updateLivro(id, livro){
    return knex("teste").where("id", id).update(livro);
}

module.exports = {
    criaLivro,
    selectLivros,
    deletaLivro,
    updateLivro
}