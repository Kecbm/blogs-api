const userService = require('../services/userService');

const getAll = async (req, res) => {
  const users = await userService.getAll();

  return res.status(200).json(users);
};

const create = async (req, res) => {
  const token = await userService.create(req.body);

  if (!token) {
    return res.status(409).json({ message: 'User already registered' });
  }

  return res.status(201).json({ token });
};

const getById = async (req, res) => {
  const { id } = req.params;

  const user = await userService.getById(Number(id));

  if (!user) {
    return res.status(404).json({ message: 'User does not exist' });
  }

  return res.status(200).json(user);
};

const remove = async (req, res) => {
  const { id } = req.user;

  await userService.remove(id);

  return res.status(204).end();
};

const userController = {
  getAll,
  create,
  getById,
  remove,
};

module.exports = userController;