const express = require('express');
const { register, login } = require('../models/users');

const router = express.Router();

/* Register a user */
router.post('/register', async (req, res) => {
  const firstname = req?.body?.firstname?.length !== 0 ? req.body.firstname : undefined;
  const lastname = req?.body?.lastname?.length !== 0 ? req.body.lastname : undefined;
  const email = req?.body?.email?.length !== 0 ? req.body.email : undefined;
  const password = req?.body?.password?.length !== 0 ? req.body.password : undefined;
  // eslint-disable-next-line max-len
  const confirmPassword = req?.body?.confirmPassword?.length !== 0 ? req.body.confirmPassword : undefined;

  // 400 Bad Request
  // eslint-disable-next-line max-len
  if (!firstname || !lastname || !email || !password || !confirmPassword) return res.sendStatus(400);

  const authenticatedUser = await register(firstname, lastname, email, password, confirmPassword);

  // 409 Conflict
  if (!authenticatedUser) return res.sendStatus(409);
  console.log(authenticatedUser);
  return res.json(authenticatedUser);
});

/* Login a user */
router.post('/login', async (req, res) => {
  const email = req?.body?.email?.length !== 0 ? req.body.email : undefined;
  const password = req?.body?.password?.length !== 0 ? req.body.password : undefined;

  // 400 Bad Request
  if (!email || !password) return res.sendStatus(400);

  const authenticatedUser = await login(email, password);

  // 401 Unauthorized
  if (!authenticatedUser) return res.sendStatus(401);
  console.log(authenticatedUser);
  return res.json(authenticatedUser);
});

module.exports = router;
