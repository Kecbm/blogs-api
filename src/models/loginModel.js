const jwt = require('jsonwebtoken');

const { User } = require('../database/models');

const enter = async (body) => {
  const { email, password } = body;

  const user = await User.findOne({
    attributes: ['id', 'displayName', 'email', 'image'],
     where: { email, password } });

  if (!user) {
    return;
  }

  const TOKEN_SECRET = process.env.JWT_SECRET;

  const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };

  const token = jwt.sign({ user: user.dataValues }, TOKEN_SECRET, jwtConfig);

  return token;
};

const loginModel = {
  enter,
};

module.exports = loginModel;