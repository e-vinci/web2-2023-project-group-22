const pg = require('pg');
require('dotenv').config();

const client = new pg.Client({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DATABASE,
  user: process.env.USER,
  password: process.env.PASSWORD,
});
client.connect();

async function test() {
  const query = {
    // give the query a unique name
    text: 'SELECT country_name FROM projetweb.countries WHERE country_code = $1',
    values: ['BEL'],
  };
  const res = await client.query(query);
  return res;
}

module.exports = {
  test,
};
