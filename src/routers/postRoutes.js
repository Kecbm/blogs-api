const express = require('express');

const router = express.Router();

const postController = require('../controllers/postController');

const { validateToken, validateOwner } = require('../middlewares/validateRoutes');

router.get('/', validateToken, postController.getAll);
router.get('/:id', validateToken, postController.getById);
router.delete('/:id', validateToken, validateOwner, postController.remove);
router.put('/:id', validateToken, validateOwner, postController.update);

module.exports = router;