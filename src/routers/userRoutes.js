const express = require('express');

const router = express.Router();

const userController = require('../controllers/userController');

const { validateToken, validateNewUser } = require('../middlewares/validateRoutes');

router.get('/', validateToken, userController.getAll);
router.post('/', validateNewUser, userController.create);
router.get('/:id', validateToken, userController.getById);
router.delete('/me', validateToken, userController.remove);

module.exports = router;