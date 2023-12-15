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
    text: 'SELECT lastname, firstname, note, comment FROM projetweb.trips_comments tc , projetweb.users u WHERE u.id_user = tc.id_user AND id_trip = $1',
    values: [id],
  };
  const res = await client.query(query);
  if (res.rows) return res.rows;
  return undefined;
}

async function readAllSiteComments() {
  const query = {
    text: 'SELECT lastname, firstname, note, comment FROM projetweb.site_comments sc , projetweb.users u WHERE u.id_user = sc.id_user',
  };
  const res = await client.query(query);
  if (res.rows[0]) return res.rows[0];
  return undefined;
}

async function readOneSiteCommentFromUserId(id) {
  const query = {
    text: 'SELECT lastname, firstname, note, comment FROM projetweb.site_comments sc , projetweb.users u WHERE u.id_user = sc.id_user AND u.user_id = $1',
    values: [id],
  };
  const res = await client.query(query);
  if (res.rows[0]) return res.rows[0];
  return undefined;
}

async function addSiteComment(idUser, rating, comment) {
  const query = {
    text: 'INSERT INTO projetweb.site_comments (id_user, rating, comment) VALUES ($1, $2, $3) RETURNING id_comment',
    values: [idUser, rating, comment],
  };
  const res = await client.query(query);
  if (res.rows) return res.rows;
  return undefined;
}

async function patchOneSiteComment(idUser, rating, comment) {
  const commentFound = readOneSiteCommentFromUserId(idUser);
  if (!commentFound) return undefined;

  const query = {
    text: 'INSERT INTO projetweb.site_comments (id_user, rating, comment) VALUES ($1, $2, $3) RETURNING id_comment',
    values: [idUser, rating, comment],
  };
  const res = await client.query(query);
  if (res.rows) return res.rows;
  return undefined;
}

async function deleteOneSiteComment(idUser) {
  const commentFound = readOneSiteCommentFromUserId(idUser);
  if (!commentFound) return undefined;

  const query = {
    text: 'DELETE FROM projetweb.site_comments WHERE id_user = $1',
    values: [idUser],
  };
  const res = await client.query(query);
  if (res.rows[0] > 0) return res.rows;
  return undefined;
}

module.exports = {
  getTripComments,
  readAllSiteComments,
  addSiteComment,
  patchOneSiteComment,
  deleteOneSiteComment,
};
