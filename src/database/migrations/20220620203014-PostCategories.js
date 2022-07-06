'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    const postCategoriesTable = await queryInterface.createTable('PostCategories', {
      postId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'BlogPosts',
          key: 'id'
        },
        onDelete: 'CASCADE'
      },
      categoryId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Categories',
          key: 'id'
        },
        onDelete: 'CASCADE'
      },
    });

    return postCategoriesTable;
  },

  async down(queryInterface, Sequelize) {
    const deletePostCategoriesTable = await queryInterface.dropTable('PostCategories');

    return deletePostCategoriesTable;
  }
};
