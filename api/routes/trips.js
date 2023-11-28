const express = require('express');
const Trip = require('../models/trips');

const router = express.Router();

/* GET trips listing. */
router.get('/test', async (req, res) => {
  const result = await Trip.test();
  res.json(result.rows);
});

module.exports = router;
