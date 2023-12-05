const client = require('./db_connection');
const { readOneUserFromUsername } = require('./users');

async function createTrip(destination, startDate, endDate, user) {
  const result = await fetch(`https://restcountries.com/v3.1/translation/${destination}`)
    .then((response) => {
      if (!response.ok) throw new Error(`fetch error : ${response.status} : ${response.statusText}`);
      return response.json();
    })
    .then((res) => (res));
  const createTripQuery = {
    text: 'INSERT INTO projetweb.trips (country_code, start_date, end_date) VALUES ($1, $2, $3) RETURNING id_trip',
    values: [result[0].cca3, startDate, endDate],
  };
  const res = await client.query(createTripQuery);
  addParticipation(user, res.rows[0]);

  const trip = {
    destination: result[0].cca3,
    startDate,
    endDate,
  };

  return trip;
}

async function addParticipation(user, trip) {
  const addParticipationQuery = {
    text: 'INSERT INTO projetweb.trips_participations (id_user, id_trip) VALUES ($1, $2)',
    values: [user.id_user, trip.id_trip],
  };
  await client.query(addParticipationQuery);
}

async function getTrip(id) {
  const getTripQuery = {
    text: 'SELECT country_code, start_date, end_date FROM projetweb.trips WHERE id_trip = $1',
    values: [id],
  };
  const res = await client.query(getTripQuery);
  return res.rows[0];
}

async function getUserTrips(email) {
  const user = await readOneUserFromUsername(email);
  if (!user) return undefined;

  const getTripQuery = {
    text: 'SELECT id_user, id_trip FROM projetweb.trips_participations WHERE id_user = $1',
    values: [user.id_user],
  };
  const res = await client.query(getTripQuery);

  return res.rows;
}

async function getParticipation(id) {
  const getParticipationQuery = {
    text: 'SELECT id_user FROM projetweb.trips_participations WHERE id_trip = $1',
    values: id,
  };
  const res = await client.query(getParticipationQuery);
  return res;
}

module.exports = {
  createTrip,
  getTrip,
  addParticipation,
  getParticipation,
  getUserTrips,
};
