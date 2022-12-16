//console.log(process.env.DATABASE_URL)
const pgp = require('pg-promise')();
const connection = pgp(process.env.DATABASE_URL);
module.exports = connection;