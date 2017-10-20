
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('petsList').del()
    .then(function () {
      // Inserts seed entries
      return knex('petsList').insert([
        {name: 'sparky', gender: 'male', type: 'dog'},
        {name: 'mgee', gender: 'male', type: 'cat'},
        {name: 'feathers', gender: 'female', type: 'parakeet'}
      ]);
    });
};
