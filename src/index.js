const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const port = process.env.PORT || 3001;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});
