const client = require('./db_connection');

async function createTrip(countryCode, startDate, endDate) {
  const query = {
    text: 'INSERT INTO projetweb.trips (country_code, start_date, end_date) VALUES (?, ?, ?)',
    values: [countryCode, startDate, endDate],
  };
  await client.query(query);

  const trip = {
    countryCode,
    startDate,
    endDate,
  };

  return trip;
}

async function getTrip(id) {
  const query = {
    text: 'SELECT country_code, start_date, end_date FROM projetweb.trips WHERE id_trip = $1',
    values: id,
  };
  const res = await client.query(query);
  return res;
}

module.exports = {
  createTrip,
  getTrip,
};
