const knex = require('knex');

const configOptions = require('../knexfile');

let env = process.env.NODE_ENV || 'development';

module.exports = knex(configOptions[env]);
