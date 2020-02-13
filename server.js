const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');

const shapesRoute = require('./routes/shapes');

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use('/shapes', shapesRoute);

mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log('connected to DB!')
);

app.listen(4000);