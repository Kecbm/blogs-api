const jwt = require('jsonwebtoken');
const postModel = require('../models/postModel');

const TOKEN_SECRET = process.env.JWT_SECRET;

const validateToken = async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }

  try {
    const decoded = jwt.verify(token, TOKEN_SECRET);

    req.user = decoded.user;
    
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

const validateLogin = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }
  
  next();
};

const validateNewUser = async (req, res, next) => {
  const { displayName, email, password } = req.body;

  if (displayName.length < 8) {
    return res.status(400)
    .json({ message: '"displayName" length must be at least 8 characters long' });
  }

  const validateEmail = email.includes('@');

  if (!validateEmail) {
    return res.status(400).json({ message: '"email" must be a valid email' });
  }

  if (password.length < 6) {
    return res.status(400)
    .json({ message: '"password" length must be at least 6 characters long' });
  }
  
  next();
};

const validateOwner = async (req, res, next) => {
  const { id } = req.params;
  const { id: userId } = req.user;

  const post = await postModel.getById(Number(id));

  if (!post) {
    return res.status(404).json({ message: 'Post does not exist' });
  }

  if (post.userId !== userId) {
    return res.status(401).json({ message: 'Unauthorized user' });
  }

  next();
};

const validateRoutes = {
  validateToken,
  validateLogin,
  validateNewUser,
  validateOwner,
};

module.exports = validateRoutes;