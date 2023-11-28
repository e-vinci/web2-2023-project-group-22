const client = require('./db_connection');

async function test() {
  const query = {
    text: 'SELECT country_name FROM projetweb.countries WHERE country_code = $1',
    values: ['BEL'],
  };
  const res = await client.query(query);
  return res;
}

module.exports = {
  test,
};
