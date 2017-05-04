//In this challenge, we are going to model a set of todo lists. A list has many todo items. Each todo item can be set to 'completed'.

//Using Sequelize-CLI, create a new application that models the following db schema,and sets up the proper migrations. Be sure to include a sample application demonstrating (with console.log()) that your models work.

const path = require('path');

module.exports = {
  "config": path.resolve('./config', 'config.json'),
  "models-path": path.resolve('./models'),
  "seeders-path": path.resolve('./seeds'),
  "migrations-path": path.resolve('./migrations')
}
