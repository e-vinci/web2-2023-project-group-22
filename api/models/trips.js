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
    tripId: res.rows[0].id_trip,
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
    text: 'SELECT id_trip, country_code, start_date, end_date, privacy FROM projetweb.trips WHERE id_trip = $1',
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

  const tripPlaces = await getPlacesForAGivenTrip(tripId);
  const order = tripPlaces.length + 1;
  console.log(order);
  const addPlaceQuery = {
    text: 'INSERT INTO projetweb.trips_places (id_trip, id_place, "order") VALUES ($1, $2, $3) RETURNING "order"',
    values: [tripId, placeId, order],
  };
  let res;
  try {
    res = await client.query(addPlaceQuery);
  } catch (error) {
    console.log(error.message);
  }
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

async function modifyOneTrip(tripId, places, privacy) {
  const trip = await getTrip(tripId);
  if (!trip) return undefined;

  for (let index = 0; index < places.length; index += 1) {
    const modifyPlacesQuery = {
      text: 'UPDATE projetweb.trips_places SET id_place = $1 WHERE id_trip = $2 AND order = $3',
      values: [places[0].place_id, tripId, index + 1],
    };
    client.query(modifyPlacesQuery);
  }

  const modifyPrivacyQuery = {
    text: 'UPDATE projetweb.trips SET privacy = $1 WHERE id_trip = $2',
    values: [privacy, tripId],
  };
  return client.query(modifyPrivacyQuery);
}

async function getPlacesForAGivenTrip(tripId) {
  const trip = await getTrip(tripId);
  if (!trip) return undefined;

  const getPlacesQuery = {
    text: 'SELECT id_place, "order" FROM projetweb.trips_places WHERE id_trip = $1',
    values: [tripId],
  };
  const res = await client.query(getPlacesQuery);
  if (res.rows) {
    const returnedPlaces = [];
    const places = await getPlaces();
    places.forEach((p) => {
      res.rows.forEach((r) => {
        if (p.place_id === r.id_place) {
          returnedPlaces.push({
            place: p,
            order: r.order,
          });
        }
      });
    });
    return returnedPlaces.sort((a, b) => a.order - b.order);
  }
  return [];
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
  modifyOneTrip,
  getPlacesForAGivenTrip,
};
