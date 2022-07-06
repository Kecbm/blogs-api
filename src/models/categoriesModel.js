const { Category } = require('../database/models');

const getAll = async () => {
  const categories = await Category.findAll({ attributes: ['id', 'name'] });

  return categories;
};

const create = async (name) => {
  const categorie = await Category.create({ name });

  const newCategorie = {
    id: categorie.insertId,
    name,
  };

  return newCategorie;
};

const categoriesModel = {
  getAll,
  create,
};

module.exports = categoriesModel;