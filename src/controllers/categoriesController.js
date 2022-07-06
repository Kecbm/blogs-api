const categoriesService = require('../services/categoriesService');

const getAll = async (req, res) => {
  const categories = await categoriesService.getAll();

  return res.status(200).json(categories);
};

const create = async (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ message: '"name" is required' });
  }

  const newCategorie = await categoriesService.create(name);

  return res.status(201).json(newCategorie);
};

const categoriesController = {
  getAll,
  create,
};

module.exports = categoriesController;