const postModel = require('../models/postModel');

const getAll = async () => {
  const posts = await postModel.getAll();

  return posts;
};

const getById = async (id) => {
  const post = await postModel.getById(id);

  return post;
};

const remove = async (id) => {
  await postModel.remove(id);
};

const update = async (id, title, content) => {
  const postUpdated = await postModel.update(id, title, content);

  return postUpdated;
};

const postService = {
  getAll,
  getById,
  remove,
  update,
};

module.exports = postService;