import express, { Request, Response } from 'express';
import { handleGetFarmers } from './src/farmers'
import bodyParser from 'body-parser'
import createAndSeed from './src/seed'
const app = express();
const port = 3001


// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
createAndSeed()

// GET route to return all users
app.get('/farmers', (req: Request, res: Response) => {
  const farmers = handleGetFarmers(30, 0)
  res.status(200).send("farmers");
  console.log('xxxx')
});

// GET route to return all users
app.get('/farmers/:id', (req, res) => {
  res.json({ xxx: "1" });
});

// POST route to create a new user
app.post('/farmers', (req, res) => {

  res.status(201).json({ xxx: "1" });
});

// DELETE route to delete a user by ID
app.delete('/farmers/:id', (req, res) => {
  // const userId = parseInt(req.params.id);
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
