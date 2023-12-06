const client = require('./db_connection');
const { readOneUserFromUsername } = require('./users');

<<<<<<< HEAD
async function createTrip(countryCode, startDate, endDate) {
  const query = {
    text: 'INSERT INTO projetweb.trips (country_code, start_date, end_date) VALUES ($1, $2, $3)',
    values: [countryCode, startDate, endDate],
=======
// Creates a trip and add a participation for the creator
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
>>>>>>> e8c1a08b51f32c33345bf1413ab54806f4a9e562
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

// Adds a participation for a user to a trip
async function addParticipation(user, trip) {
  const addParticipationQuery = {
    text: 'INSERT INTO projetweb.trips_participations (id_user, id_trip) VALUES ($1, $2)',
    values: [user.id_user, trip.id_trip],
  };
  await client.query(addParticipationQuery);
}

// Returns the trip for given id
async function getTrip(id) {
  const getTripQuery = {
    text: 'SELECT country_code, start_date, end_date FROM projetweb.trips WHERE id_trip = $1',
    values: [id],
  };
  const res = await client.query(getTripQuery);
  return res.rows[0];
}

// Returns the trips for given email
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

// Returns participations for given trip id
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
