const { User } = require('../database/models');

const jwt = require('jsonwebtoken');

const getAll = async () => {
  const users = await User.findAll({ attributes: ['id', 'displayName', 'email', 'image'] });

  return users;
};

const create = async ({ displayName, email, password, image }) => {
  const userExists = await User.findOne({ where: { email } });

  if (userExists) {
    return;
  }

  const newUser = await User.create({ displayName, email, password, image });

  const TOKEN_SECRET = process.env.JWT_SECRET;

  const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };

  const token = jwt.sign({ data: newUser.dataValues }, TOKEN_SECRET, jwtConfig);

  return token;
};

const getById = async (id) => {
  const user = await User.findOne({ attributes: ['id', 'displayName', 'email', 'image'], where: { id } });

  if (!user) {
    return;
  }

  return user;
};

const remove = async (id) => {
  const user = await User.findByPk(id);

  await user.destroy();
};

const userModel = {
  getAll,
  create,
  getById,
  remove,
};

module.exports = userModel;