const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const cors = require('cors');
const mongo = require('./app/mongodb.connection');
const router = require('./app/routes');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 8080;
const corsConfig = {
  origin: 'http://localhost:3000',
  methods: 'GET,PUT,POST,DELETE',
  credentials: true,
  allowedHeaders: 'Origin,X-Requested-With,Content-Type,Accept,Cookie',
  preflightContinue: false,
  optionsSuccessStatus: 204
};

app.use(morgan('tiny'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors(corsConfig));

app.use(router);

mongo
  .connect(
    process.env.MONGODB_URL,
    process.env.MONGODB_DB
  )
  .then(() => console.log(`Mongo connected...`))
  .then(() => app.listen(port))
  .then(() => console.log(`Magic happens on port ${port}`))
  .catch(err => {
    console.log(err);
    process.exit(1);
  });
