const express = require('express');
const Trip = require('../models/trips');

const router = express.Router();

// Create a new trip by giving cca3 country code, start date and end date
router.post('/createtrip', async (req, res) => {
  const countryCode = req?.body?.countryCode?.length !== 0 ? req.body.countryCode : undefined;
  const startDate = req?.body?.startDate ? req.body.startDate : undefined;
  const endDate = req?.body?.endDate ? req.body.endDate : undefined;

  // 400 Bad Request
  if (!countryCode || !startDate || !endDate) return res.sendStatus(400);

  const trip = await Trip.createTrip(countryCode, startDate, endDate);

  // 401 Unauthorized
  if (!trip) return res.sendStatus(401);
  return res.json(trip);
});

// Returns the trip found for matching id
router.get('/trip/:id', (req, res) => {
  const tripId = req.params.id ? req.params.id : undefined;
  if (!tripId) res.send('Please specify the trip id').statusCode(404);
});

module.exports = router;
