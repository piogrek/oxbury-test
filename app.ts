import express, { Request, Response } from 'express';
import bodyParser from 'body-parser'
import createAndSeed from './src/seed'

import rateLimit from 'express-rate-limit'
import { Express } from 'express-serve-static-core';
import setupRoutes from './src/routes';
const app = express();
const port = 3001

// simple auth middleware
app.use((req, res, next) => {

  // demo user - todo move to DB and hash password
  const auth = { login: 'api', password: 'password' }

  // parse login and password from headers
  const b64auth = (req.headers.authorization || '').split(' ')[1] || ''
  const [login, password] = Buffer.from(b64auth, 'base64').toString().split(':')

  // Verify login and password are set and correct
  if (login && password && login === auth.login && password === auth.password) {
    // Access granted...
    return next()
  }

  // Access denied...
  res.set('WWW-Authenticate', 'Basic realm="401"')
  res.status(401).send('Authentication required.') // custom message

})

// rate limiting. 10 requests per minute
const limiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 10, // Limit each IP to 10 requests per `window` (here, per 10 minute)
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
})

// Apply the rate limiting middleware to all requests
app.use(limiter)

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
createAndSeed()

// setup routes
setupRoutes(app)

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});



