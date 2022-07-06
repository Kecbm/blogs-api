const express = require('express');

const router = express.Router();

const categoriesController = require('../controllers/categoriesController');

const { validateToken } = require('../middlewares/validateRoutes');

router.get('/', validateToken, categoriesController.getAll);
router.post('/', validateToken, categoriesController.create);

module.exports = router;