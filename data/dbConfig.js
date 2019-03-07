const knex = require('knex');
const config = require('../knexfile.js');

const dbEnv = process.env.DB_ENV || 'development';

// go to heroku and add env variable : "DB_ENV = production"
// then install knex CLI

module.exports = knex(config[dbEnv]);
