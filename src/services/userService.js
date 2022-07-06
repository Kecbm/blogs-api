const userModel = require('../models/userModel');

const getAll = async () => {
  const users = await userModel.getAll();

  return users;
};

const create = async ({ displayName, email, password, image }) => {
  const token = await userModel.create({ displayName, email, password, image });

  return token;
};

const getById = async (id) => {
  const user = await userModel.getById(id);

  return user;
};

const remove = async (id) => {
  await userModel.remove(id);
};

const userService = {
  getAll,
  create,
  getById,
  remove,
};

module.exports = userService;