require('dotenv').config();
const connection = require('./knexfile')[process.env.NODE_ENV || 'development'];
const database = require('knex')(connection);

module.exports = {
  getAllQuestions() {
    // get 20 questions at random
    let query = database('questions')
    return query
  },
  getQuestionsByCategory(request) {
    const category = request.query.category;
    return database('questions').where('category', category).orderByRaw('RANDOM()').limit(20);
  },
  postUserQuestion(question) {
      return database('questions').insert(question, 'id');
  }

}