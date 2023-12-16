const express = require('express');
const {
  getTripComments,
  readAllSiteComments,
  addSiteComment,
  patchOneSiteComment,
  deleteOneSiteComment,
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

  if (!tripId) return res.send('Please specify the trip id').sendStatus(404);

  const tripComments = await getTripComments(tripId);

  // if (!tripComments || Object.keys(tripComments).length === 0) return res.sendStatus(404);
  return res.json(tripComments);
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

  const addedComment = await addSiteComment(userFound.id_user, rating, comment);
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
  if (!modifiedComment || Object.keys(modifiedComment).length === 0) return res.sendStatus(401);

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
