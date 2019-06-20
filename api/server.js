const express = require('express');
const server = express();

const middlewareConfig = require('./config/middleware');

// import routers
const {
  authRouter,
  usersRouter,
} = require('./routes');

middlewareConfig(server); // third-party middleware

server.use(express.json());

// routers
server.use("/api/auth", authRouter);
server.use("/api/users", usersRouter);

server.get('/', (req, res) => {
  res.send(`<p>Authentication III</p>`);
});

module.exports = server;
