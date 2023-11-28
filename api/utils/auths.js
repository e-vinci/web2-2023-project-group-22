const jwt = require('jsonwebtoken');
const { readOneUserFromUsername } = require('../models/users');

const jwtSecret = 'ilovemypizza!';

const authorize = async (req, res, next) => {
  const token = req.get('authorization');
  if (!token) return res.sendStatus(401);

  try {
    const decoded = jwt.verify(token, jwtSecret);
    console.log('decoded', decoded);
    const { email } = decoded;

    const existingUser = await readOneUserFromUsername(email);

    if (!existingUser) return res.sendStatus(401);

    req.user = existingUser; // request.user object is available in all other middleware functions
    return next();
  } catch (err) {
    console.error('authorize: ', err);
    return res.sendStatus(401);
  }
};

const isAdmin = async (req, res, next) => {
  const { role } = req.user;

  if (role !== 'admin') return res.sendStatus(403);

  return next();
};

module.exports = { authorize, isAdmin };
