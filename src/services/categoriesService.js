const categoriesModel = require('../models/categoriesModel');

const getAll = async () => {
  const categories = await categoriesModel.getAll();

  return categories;
};

const create = async (name) => {
  const newCategorie = await categoriesModel.create(name);

  return newCategorie;
};

const categoriesService = {
  getAll,
  create,
};

module.exports = categoriesService;