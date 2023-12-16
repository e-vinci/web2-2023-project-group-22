const express = require('express');
const Utils = require('../utils/json');

const router = express.Router();
const jsonDbPath = `${__dirname}/../data/places.json`;

/* GET users listing. */
router.get('/', async (req, res) => {
  res.send('test');
});

router.post('/new', async (req, res) => {
  const place = req?.body?.place?.length !== 0 ? req.body.place : undefined;
  const places = Utils.parse(jsonDbPath, []);
  places.push(place);
  Utils.serialize(jsonDbPath, places);
  return res.sendStatus(200);
});

module.exports = router;
