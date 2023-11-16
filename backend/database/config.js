const { Pool } = require('pg');

const pool = new Pool({
  host: 'localhost',
  user: 'postgres',
  password: 'lb1205',
  database: 'pruebaTecnica-Avance',
  port: 5435,
});

module.exports = pool;