
const express = require('express');

const { signupUser, loginUser, displayUser } = require('../controllers/userControllers');
const validateToken = require('../middleware/validateTokenHandler');

const router = express.Router();

router.post( '/signup', signupUser);

router.post('/login', loginUser);

router.get('/details', validateToken, displayUser);


module.exports = router;