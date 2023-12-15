const client = require('./db_connection');
const { readOneUserFromEmail } = require('./users');
const Utils = require('../utils/json');

const jsonDbPath = `${__dirname}/../data/places.json`;

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
  const user = await readOneUserFromEmail(email);
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

// Returns places
async function getPlaces() {
  const places = Utils.parse(jsonDbPath, []);
  return places;
}

// Add a place to a trip
async function addOnePlaceToTrip(tripId, placeId) {
  const trip = await getTrip(tripId);
  if (!trip) return undefined;

  const addPlaceQuery = {
    text: 'INSERT INTO projetweb.trips_places (id_trip, id_place) VALUES ($1, $2)',
    values: [tripId, placeId],
  };
  const res = await client.query(addPlaceQuery);
  return res;
}

// Remove a place from a trip
async function removeOnePlaceToTrip(tripId, placeId) {
  const trip = await getTrip(tripId);
  if (!trip) return undefined;

  const removePlaceQuery = {
    text: 'DELETE FROM projetweb.trips_places WHERE id_trip = $1 AND id_place = $2',
    values: [tripId, placeId],
  };
  const res = await client.query(removePlaceQuery);
  return res;
}

async function modifyOrderFromOnePlace(tripId, placeId, order) {
  const trip = await getTrip(tripId);
  if (!trip) return undefined;

  const modifyOrderQuery = {
    text: 'UPDATE projetweb.trips_places SET order = $1 WHERE id_trip = $2 AND id_place = $3',
    values: [order, tripId, placeId],
  };
  const res = await client.query(modifyOrderQuery);
  return res;
}

module.exports = {
  createTrip,
  getTrip,
  addParticipation,
  getParticipation,
  getUserTrips,
  getPlaces,
  addOnePlaceToTrip,
  removeOnePlaceToTrip,
  modifyOrderFromOnePlace,
};
