const postService = require('../services/postService');

const getAll = async (req, res) => {
  const posts = await postService.getAll();

  return res.status(200).json(posts);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const post = await postService.getById(Number(id));

  if (!post) {
    return res.status(404).json({ message: 'Post does not exist' });
  }

  return res.status(200).json(post);
};

const remove = async (req, res) => {
  const { id } = req.params;

  await postService.remove(id);

  return res.status(204).end();
};

const update = async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;

  if (!title || !content) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }

  const postUpdated = await postService.update(id, title, content);

  return res.status(200).json(postUpdated);
};

const postController = {
  getAll,
  getById,
  remove,
  update,
};

module.exports = postController;