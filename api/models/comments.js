const client = require('./db_connection');

// Returns all trip comments for given id
async function getTripComments(id) {
  const tripFound = await readOneTripFromId(id);
  if (!tripFound) return undefined;

  const tripComments = await readAllCommentsForTrip(id);
  if (!tripComments) return [];

  return tripComments;
}

// Returns infos on a trip for given id
async function readOneTripFromId(id) {
  const query = {
    text: 'SELECT * FROM projetweb.trips WHERE id_trip = $1',
    values: [id],
  };
  const res = await client.query(query);
  if (res.rows[0]) return res.rows[0];
  return undefined;
}

// Get all comments for specified trip
async function readAllCommentsForTrip(id) {
  const query = {
    text: 'SELECT lastname, firstname, rating, comment FROM projetweb.trips_comments tc, projetweb.users u WHERE u.id_user = tc.id_user AND id_trip = $1',
    values: [id],
  };
  const res = await client.query(query);
  if (res.rows) return res.rows;
  return undefined;
}

// Returns all site comments
async function readAllSiteComments() {
  const query = {
    text: 'SELECT lastname, firstname, rating, comment FROM projetweb.site_comments sc, projetweb.users u WHERE u.id_user = sc.id_user ORDER BY id_comment DESC',
  };
  const res = await client.query(query);
  if (res.rows) return res.rows;
  return undefined;
}

// Read a site comment for given user id
async function readOneSiteCommentFromUserId(id) {
  const query = {
    text: 'SELECT lastname, firstname, rating, comment FROM projetweb.site_comments sc, projetweb.users u WHERE u.id_user = sc.id_user AND u.id_user = $1',
    values: [id],
  };
  const res = await client.query(query);
  if (res.rows[0]) return res.rows[0];
  return undefined;
}

// Add a site comment
async function addOneSiteComment(idUser, rating, comment) {
  const commentFound = await readOneSiteCommentFromUserId(idUser);
  if (commentFound) return undefined;

  const query = {
    text: 'INSERT INTO projetweb.site_comments (id_user, rating, comment) VALUES ($1, $2, $3) RETURNING id_comment',
    values: [idUser, rating, comment],
  };
  const res = await client.query(query);
  if (res.rows) return res.rows;
  return undefined;
}

// Modify a site comment if existing
async function patchOneSiteComment(idUser, rating, comment) {
  const commentFound = readOneSiteCommentFromUserId(idUser);
  if (!commentFound) return undefined;

  const query = {
    text: 'UPDATE projetweb.site_comments SET rating = $1, comment = $2 WHERE id_user = $3',
    values: [rating, comment, idUser],
  };
  return client.query(query);
}

// Delete a site comment if existing
async function deleteOneSiteComment(idUser) {
  const commentFound = readOneSiteCommentFromUserId(idUser);
  if (!commentFound) return undefined;

  const query = {
    text: 'DELETE FROM projetweb.site_comments WHERE id_user = $1',
    values: [idUser],
  };
  return client.query(query);
}

async function readOneTripCommentFromUserForTripId(userId, tripId) {
  const query = {
    text: 'SELECT lastname, firstname, rating, comment, image FROM projetweb.trips_comments tc, projetweb.users u WHERE u.id_user = tc.id_user AND tc.id_user = $1 AND tc.id_trip = $2',
    values: [userId, tripId],
  };
  const res = await client.query(query);
  if (res.rows[0]) return res.rows[0];
  return undefined;
}

async function addOneTripComment(tripId, rating, comment, userId, fileName) {
  const commentFound = await readOneTripCommentFromUserForTripId(userId, tripId);
  if (commentFound) return undefined;

  const query = {
    text: 'INSERT INTO projetweb.trips_comments (id_trip, id_user, rating, comment, image) VALUES ($1, $2, $3, $4, $5) RETURNING id_trip_comment',
    values: [tripId, userId, rating, comment, fileName],
  };
  const res = await client.query(query);
  if (res.rows) return res.rows;
  return undefined;
}

async function patchOneTripComment(userId, tripId, rating, comment) {
  const commentFound = await readOneTripCommentFromUserForTripId(userId, tripId);
  if (!commentFound) return undefined;

  console.log(commentFound);

  const query = {
    text: 'UPDATE projetweb.trips_comments SET rating = $1, comment = $2 WHERE id_user = $3 AND id_trip = $4',
    values: [rating, comment, userId, tripId],
  };
  return client.query(query);
}

async function deleteOneTripComment(userId, tripId) {
  const commentFound = await readOneTripCommentFromUserForTripId(userId, tripId);
  if (!commentFound) return undefined;

  const query = {
    text: 'DELETE FROM projetweb.trips_comments WHERE id_user = $1 AND id_trip = $2',
    values: [userId, tripId],
  };
  const res = await client.query(query);
  if (res.rows) return res.rows;
  return undefined;
}

module.exports = {
  getTripComments,
  readAllSiteComments,
  addOneSiteComment,
  patchOneSiteComment,
  deleteOneSiteComment,
  addOneTripComment,
  deleteOneTripComment,
  patchOneTripComment,
};
