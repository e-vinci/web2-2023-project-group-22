const express = require('express');
const { authorize, isAdmin } = require('../utils/auths');

const router = express.Router();

/* GET users listing. */
router.get('/', async (req, res, next) => {
  await authorize(req, res, next);
  await isAdmin(req, res, next);
  res.json(req.user);
});

module.exports = router;
