const { BlogPost, User, Category } = require('../database/models');

const getAll = async () => {
  const posts = await BlogPost.findAll({
    include: [{ model: User, as: 'user', attributes: { exclude: ['password'] } },
    { model: Category, as: 'categories', through: { attributes: [] } }]
  });

  return posts;
};

const getById = async (id) => {
  const post = await BlogPost.findOne({
    include: [{ model: User, as: 'user', attributes: { exclude: ['password'] } },
    { model: Category, as: 'categories', through: { attributes: [] } }],
    where: { id },
  });

  if (!post) {
    return;
  }

  return post;
};

const remove = async (id) => {
  const post = await BlogPost.findByPk(id);

  await post.destroy();
};

const update = async (id, title, content) => {
  const post = await BlogPost.findByPk(id);

  post.title = title;
  post.content = content;
  await post.save();

  const postUpdated = await getById(id);

  return postUpdated.dataValues;
};

const postModel = {
  getAll,
  getById,
  remove,
  update,
};

module.exports = postModel;