const express = require('express');
const { getTripComments } = require('../models/comments');

const router = express.Router();

/* GET specific trip comments listing. */
router.get('/trip/:id', async (req, res) => {
  const tripId = req.params.id ? req.params.id : undefined;

  if (!tripId) res.send('Please specify the trip id').statusCode(404);

  const tripComments = getTripComments(tripId);

  if (!tripComments || Object.keys(tripComments).length === 0) res.sendStatus(404);
  return res.json(tripComments);
});

/* GET site comments listing. */
router.get('/site/all', async (req, res) => {
  res.send('Test');
});

/* GET site comments listing. */
router.post('/site/add', async (req, res) => {
  res.send('Test');
});

/* GET site comments listing. */
router.post('/site/modify', async (req, res) => {
  res.send('Test');
});

/* GET site comments listing. */
router.post('/site/remove', async (req, res) => {
  res.send('Test');
});

module.exports = router;
