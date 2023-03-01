const questions = require('../../results/triviaQuestions3.js')

exports.seed = function(knex) {
  return knex('questions')
  .del()
  .then(() => {
    return knex.raw('ALTER SEQUENCE questions_id_seq RESTART WITH 1');
  })
  .then(() => {
    return knex('questions').insert(questions);
  })
  .catch(error => console.log(`Error seeding data: ${error}`));
}