require('dotenv').config();
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');
// const session = require('express-session');
// const KnexSessionStore = require('connect-session-knex')(session);

// const db = require('../../data/dbConfig');

// const sessionConfig = {
//   secret: process.env.SESSION_SECRET,
//   name: process.env.SESSION_NAME,
//   cookie: {
//     secure: false, // change to true in production
//     maxAge: 1000 * 60 * 5
//   },
//   httpOnly: true,
//   resave: false,
//   saveUninitialized: false,
//   store: new KnexSessionStore({
//     knex: db,
//     createtable: true,
//     clearInterval: 1000 * 60 * 60
//   })
// }

module.exports = server => {
  // server.use(session(sessionConfig));
  server.use(helmet());
  server.use(morgan('dev'));
  server.use(cors());
}
