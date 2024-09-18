const express = require('express');
const bodyParser = require('body-parser');
const { signup, signin } = require('../controller/authController');

const router = express.Router();
router.use(bodyParser.json());

router.post('/signup', signup);
router.post('/signin', signin);
router.post('/chat', (req, res) => {
  res.status(200).send('Chat');
});

module.exports = router;
