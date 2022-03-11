const express = require('express');
const app = express();
const port = 8800;
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const helmet = require('helmet');
const foodsRoute = require('./routes/foods');

dotenv.config();

mongoose.connect(
  process.env.MONGO_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log('Connected to MongoDB');
  }
);
//midleware
app.use(express.json());
app.use(helmet());

app.use('/api/foods/', foodsRoute);

app.listen(port, () => console.log(`Backend server is listening at http://localhost:${port}`));
