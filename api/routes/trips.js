const express = require('express');
const Trip = require('../models/trips');
const { authorize } = require('../utils/auths');

const router = express.Router();

// Create a new trip by giving cca3 country code, start date and end date
router.post('/createtrip', authorize, async (req, res) => {
  const countryCode = req?.body?.countryCode?.length !== 0 ? req.body.countryCode : undefined;
  const startDate = req?.body?.startDate ? req.body.startDate : undefined;
  const endDate = req?.body?.endDate ? req.body.endDate : undefined;

  // 400 Bad Request
  if (!countryCode || !startDate || !endDate) return res.sendStatus(400);

  const trip = await Trip.createTrip(countryCode, startDate, endDate, req.user);

  // 401 Unauthorized
  if (!trip) return res.sendStatus(404);
  return res.json(trip);
});

// Returns the trip found for matching id
router.get('/:id', async (req, res) => {
  const tripId = req.params.id ? req.params.id : undefined;
  if (!tripId) res.send('Please specify the trip id').statusCode(404);
  const trip = await Trip.getTrip(tripId);

  if (!trip || Object.keys(trip).length === 0) res.sendStatus(404);
  return res.json(trip);
});

// Returns the trips found for matching user
router.get('/user/:userEmail', async (req, res) => {
  const userEmail = req?.params?.userEmail?.length !== 0 ? req.params.userEmail : undefined;
  if (!userEmail) res.sendStatus(404);

  const trip = await Trip.getUserTrips(userEmail);

  if (!trip) res.sendStatus(404);
  return res.json(trip);
});

module.exports = router;
