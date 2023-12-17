const express = require('express');
const {
  getTripComments,
  readAllSiteComments,
  addOneSiteComment,
  patchOneSiteComment,
  deleteOneSiteComment,
  addOneTripComment,
  deleteOneTripComment,
  patchOneTripComment,
} = require('../models/comments');
const {
  authorize,
} = require('../utils/auths');
const {
  readOneUserFromEmail,
} = require('../models/users');

const router = express.Router();

/* GET specific trip comments listing. */
router.get('/trip/:id', async (req, res) => {
  const tripId = req.params.id ? req.params.id : undefined;

  if (!tripId) return res.sendStatus(404);

  const tripComments = await getTripComments(tripId);

  return res.json(tripComments);
});

/* GET specific trip comments listing. */
router.post('/trip/add', authorize, async (req, res) => {
  const tripId = req?.body?.tripId >= 0 && req?.body?.tripId <= 5 ? req.body.tripId : undefined;
  const rating = req?.body?.rating >= 0 && req?.body?.rating <= 5 ? req.body.rating : undefined;
  const comment = req?.body?.comment?.length !== 0 ? req.body.comment : undefined;
  const user = req.user.email;

  const userFound = await readOneUserFromEmail(user);

  if (!tripId || !rating || !comment) return res.sendStatus(400);

  const addedComment = await addOneTripComment(tripId, rating, comment, userFound.id_user);
  if (!addedComment || Object.keys(addedComment).length === 0) return res.sendStatus(401);

  return res.json(addedComment);
});

/* MODIFY trip comment. */
router.patch('/trip/modify', authorize, async (req, res) => {
  const tripId = req?.body?.tripId >= 0 && req?.body?.tripId <= 5 ? req.body.tripId : undefined;
  const rating = req?.body?.rating >= 0 && req?.body?.rating <= 5 ? req.body.rating : undefined;
  const comment = req?.body?.comment?.length !== 0 ? req.body.comment : undefined;
  const user = req.user.email;

  if (!tripId || !rating || !comment) return res.sendStatus(400);

  const userFound = await readOneUserFromEmail(user);

  const modifiedComment = await patchOneTripComment(userFound.id_user, tripId, rating, comment);
  if (!modifiedComment || modifiedComment.rowCount === 0) return res.sendStatus(401);

  const returnedComment = {
    firstname: userFound.firstname,
    lastname: userFound.lastname,
    rating,
    comment,
  };
  return res.json(returnedComment);
});

/* DELETE trip comment. */
router.delete('/trip/remove', authorize, async (req, res) => {
  const tripId = req?.body?.tripId >= 0 && req?.body?.tripId <= 5 ? req.body.tripId : undefined;
  const user = req.user.email;

  if (!tripId) return res.sendStatus(400);

  const userFound = await readOneUserFromEmail(user);

  const deletedComment = await deleteOneTripComment(userFound.id_user, tripId);
  if (!deletedComment) return res.sendStatus(404);

  return res.sendStatus(200);
});

/* GET site comments listing. */
router.get('/site', async (req, res) => {
  const siteComments = await readAllSiteComments();

  // if (!siteComments || Object.keys(siteComments).length === 0) return res.sendStatus(404);
  return res.json(siteComments);
});

/* ADD site comment. */
router.post('/site/add', authorize, async (req, res) => {
  const rating = req?.body?.rating >= 0 && req?.body?.rating <= 5 ? req.body.rating : undefined;
  const comment = req?.body?.comment?.length !== 0 ? req.body.comment : undefined;
  const user = req.user.email;

  const userFound = await readOneUserFromEmail(user);

  const addedComment = await addOneSiteComment(userFound.id_user, rating, comment);
  if (!addedComment || Object.keys(addedComment).length === 0) return res.sendStatus(401);

  const createdComment = {
    firstname: userFound.firstname,
    lastname: userFound.lastname,
    rating,
    comment,
  };
  return res.json(createdComment);
});

/* MODIFY site comment. */
router.patch('/site/modify', authorize, async (req, res) => {
  const rating = req?.body?.rating >= 0 && req?.body?.rating <= 5 ? req.body.rating : undefined;
  const comment = req?.body?.comment?.length !== 0 ? req.body.comment : undefined;
  const user = req.user.email;

  const userFound = await readOneUserFromEmail(user);

  const modifiedComment = await patchOneSiteComment(userFound.id_user, rating, comment);
  if (!modifiedComment || modifiedComment.rowCount === 0) return res.sendStatus(401);

  const returnedComment = {
    firstname: userFound.firstname,
    lastname: userFound.lastname,
    rating,
    comment,
  };
  return res.json(returnedComment);
});

/* DELETE site comment. */
router.delete('/site/remove', authorize, async (req, res) => {
  const user = req.user.email;

  const userFound = await readOneUserFromEmail(user);

  const deletedComment = await deleteOneSiteComment(userFound.id_user);
  if (!deletedComment) return res.sendStatus(404);

  return res.sendStatus(200);
});

module.exports = router;
