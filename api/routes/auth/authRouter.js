const express = require('express');
const router = express.Router();


/*
@POST: register new user
@PARAMS: user object as { username, password }
@ROUTE: "/api/auth"
*/
router.post('/register', async (req, res) => {

})


// POST - login
router.post('/login', async (req, res) => {

})

router.get('/logout', (req, res) => {

})

module.exports = router;
