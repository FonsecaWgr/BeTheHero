
//criando a tabela - o metodo UP é sempre responsavel pela criação da tabela
exports.up = function(knex) {
    return knex.schema.createTable('ongs', function (table){
        //criando a primeira colula ID primaria
        table.string('id').primary();
        //criando outra coluna e informando que nao pode ser valor nulo
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('whatsapp').notNullable();
        table.string('city').notNullable();
        table.string('uf', 2).notNullable();
        


    })
  
};
//serve para voltar a tabela, deletar ultiams alterações etc
exports.down = function(knex) {
    return knex.schema.dropTable('ongs');
  
};
