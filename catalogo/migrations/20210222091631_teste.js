
exports.up = function(knex) {
  return knex.schema.createTable("teste", (teste) =>{
      teste.increments();
      teste.string("nome");
      teste.string("subtitulo");
      teste.string("resumo");
      teste.string("isbn");
      teste.string("preco");
      teste.string("imagem");
  })
};

exports.down = function(knex) {
  return knex.dropTable("teste");
};
