const client = require('./db_connection');

async function createTrip(destination, startDate, endDate) {
  console.log(destination);
  const result = await fetch(`https://restcountries.com/v3.1/translation/${destination}`)
    .then((response) => {
      if (!response.ok) throw new Error(`fetch error : ${response.status} : ${response.statusText}`);
      return response.json();
    })
    .then((res) => (res));

  console.log(result[0].cca3);
  const query = {
    text: 'INSERT INTO projetweb.trips (country_code, start_date, end_date) VALUES ($1, $2, $3)',
    values: [result[0].cca3, startDate, endDate],
  };
  client.query(query);

  const trip = {
    destination: result[0].cca3,
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
