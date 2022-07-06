const express = require('express');

const router = express.Router();

const loginController = require('../controllers/loginController');

const { validateLogin } = require('../middlewares/validateRoutes');

router.post('/', validateLogin, loginController.enter);

module.exports = router;