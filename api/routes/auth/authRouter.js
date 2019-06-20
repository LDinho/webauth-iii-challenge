const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

const {
  generateToken,

} = require('./token');

const {
  addUser,
  getUserBy,

} = require('../../helpers/usersDbhelper');

/*
@POST: register new user
@PARAMS: user object as { username, password, department }
@ROUTE: "/api/auth"
*/

router.post('/register', async (req, res) => {
  const user = req.body;

  const { username, password, department } = user;

  const hash = bcrypt.hashSync(password, 12);

  user.password = hash;

  try {

    if (!username || !password || !department) {
      return res.status(400)
        .json({
          errorMessage: "registration info missing."
        });
    }

    const userAdded = await addUser(user);

    const token = generateToken(user); // use of the jwt library

    return res.status(201)
              .json({
                user: userAdded,
                authToken: token,
              });

  }
  catch (err) {
    res.status(500)
      .json({
        err: err.message,
        error: `Server error`
      })
  }

})

// POST - login
router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {

    if (!username || !password) {
      return res.status(400)
        .json({
          errorMessage: "username or password missing."
        });
    }

    const user = await getUserBy({ username });

    if (!user) {
      return res.status(400)
        .json({
          message: `user not found`
        });
    }

    const isValidPassword =
      bcrypt.compareSync(password, user.password);

    if (!isValidPassword) {
      return res.status(401)
        .json({
          message: 'Invalid Credentials'
        });
    } else {

      // req.session.user = user; // use of sessions

      const token = generateToken(user); // use of the jwt library

      return res.status(200)
        .json({
          message: `Welcome ${user.username}!`,
          authToken: token,
        });
    }
  }
  catch (err) {
    res.status(500)
      .json({
        err: err.message,
        error: `Server error`
      })
  }
})

module.exports = router;
