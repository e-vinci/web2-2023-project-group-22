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

// Returns possibles places for trip
router.get('/places/all', async (req, res) => {
  const places = await Trip.getPlaces();

  if (!places) res.sendStatus(404);
  return res.json(places);
});

// Add a place to a trip
router.post('/addplace', authorize, async (req, res) => {
  const placeId = req?.body?.placeId?.length !== 0 ? req.body.placeId : undefined;
  const tripId = req?.body?.tripId ? req.body.tripId : undefined;

  // 400 Bad Request
  if (!placeId || !tripId) return res.sendStatus(400);

  const addedPlace = await Trip.addOnePlaceToTrip(tripId, placeId);

  // 404 Trip not found or place not added
  if (!addedPlace) return res.sendStatus(404);
  return res.json(addedPlace);
});

// Remove a place for a trip
router.post('/removeplace', authorize, async (req, res) => {
  const placeId = req?.body?.placeId?.length !== 0 ? req.body.placeId : undefined;
  const tripId = req?.body?.tripId ? req.body.tripId : undefined;

  // 400 Bad Request
  if (!placeId || !tripId) return res.sendStatus(400);

  const removedPlace = await Trip.removeOnePlaceToTrip(tripId, placeId);

  // 404 Trip not found or place not added
  if (!removedPlace) return res.sendStatus(404);
  return res.json(removedPlace);
});

// Modify a place in a trip
router.post('/modifyplace', authorize, async (req, res) => {
  const placeId = req?.body?.placeId?.length !== 0 ? req.body.placeId : undefined;
  const tripId = req?.body?.tripId ? req.body.tripId : undefined;
  const order = req?.body?.order ? req.body.order : undefined;

  // 400 Bad Request
  if (!placeId || !tripId) return res.sendStatus(400);

  const removedPlace = await Trip.modifyOrderFromOnePlace(tripId, placeId, order);

  // 404 Trip not found or place not added
  if (!removedPlace) return res.sendStatus(404);
  return res.json(removedPlace);
});

module.exports = router;
