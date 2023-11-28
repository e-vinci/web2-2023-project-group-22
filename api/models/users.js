const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const client = require('./db_connection');

const jwtSecret = 'ilovemypizza!';
const lifetimeJwt = 24 * 60 * 60 * 1000; // in ms : 24 * 60 * 60 * 1000 = 24h

const saltRounds = 10;

async function login(email, password) {
  const userFound = await readOneUserFromUsername(email);
  if (!userFound) return undefined;

  const passwordMatch = await bcrypt.compare(password, userFound.password);
  if (!passwordMatch) return undefined;

  const token = jwt.sign(
    { email }, // session data added to the payload (payload : part 2 of a JWT)
    jwtSecret, // secret used for the signature (signature part 3 of a JWT)
    { expiresIn: lifetimeJwt }, // lifetime of the JWT (added to the JWT payload)
  );

  const authenticatedUser = {
    email,
    token,
  };

  return authenticatedUser;
}

async function register(firstname, lastname, email, password) {
  const userFound = await readOneUserFromUsername(email);
  if (userFound) return undefined;

  await createOneUser(firstname, lastname, email, password);

  const token = jwt.sign(
    { email }, // session data added to the payload (payload : part 2 of a JWT)
    jwtSecret, // secret used for the signature (signature part 3 of a JWT)
    { expiresIn: lifetimeJwt }, // lifetime of the JWT (added to the JWT payload)
  );

  const authenticatedUser = {
    email,
    token,
  };

  return authenticatedUser;
}

async function readOneUserFromUsername(email) {
  const query = {
    text: 'SELECT email, password, role FROM projetweb.users WHERE email = $1',
    values: [email],
  };
  const res = await client.query(query);
  if (res.rows[0]) return res.rows[0];
  return undefined;
}

async function createOneUser(firstname, lastname, email, password) {
  const hashedPassword = await bcrypt.hash(password, saltRounds);

  const query = {
    text: 'INSERT INTO projetweb.users (firstname, lastname, email, password) VALUES ($1, $2, $3, $4)',
    values: [firstname, lastname, email, hashedPassword],
  };
  const res = await client.query(query);
  return res;
}

module.exports = {
  login,
  register,
  readOneUserFromUsername,
};
