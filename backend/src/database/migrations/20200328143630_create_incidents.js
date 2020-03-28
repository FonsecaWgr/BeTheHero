
exports.up = function(knex) {

    return knex.schema.createTable('incidents', function (table){
        //criando a primeira colula ID primaria que se auto incrementa
        table.increments();
        //criando outra coluna e informando que nao pode ser valor nulo
        table.string('title').notNullable();
        table.string('description').notNullable();
        table.decimal('value').notNullable();

        table.string('ong_id').notNullable();

        //criando a chave estrangeira referenciando a tabale ongs
        table.foreign('ong_id').references('id').inTable('ongs');
    })
  
};

exports.down = function(knex) {
    return knex.schema.dropTable('incidents');

  
};
