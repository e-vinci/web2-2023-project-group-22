const client = require('./db_connection');

async function getTripComments(id) {
  const tripFound = readOneTripFromId(id);
  if (!tripFound) return undefined;

  const tripComments = await readAllCommentsForTrip(id);
  if (!tripComments.rows) return [];

  return tripComments;
}

async function readOneTripFromId(id) {
  const query = {
    text: 'SELECT * FROM projetweb.trips WHERE id_trip = $1',
    values: [id],
  };
  const res = await client.query(query);
  if (res.rows[0]) return res.rows[0];
  return undefined;
}

async function readAllCommentsForTrip(id) {
  const query = {
    text: 'SELECT lastname, firstname, note, comment FROM projetweb.trips_comments tc , projetweb.users u WHERE u.id_user = tc.id_user id_trip = $1',
    values: [id],
  };
  const res = await client.query(query);
  if (res.rows) return res.rows;
  return undefined;
}

module.exports = {
  getTripComments,
};
