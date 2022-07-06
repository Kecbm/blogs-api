'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    const categoriesTable = await queryInterface.createTable('Categories', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
    });

    return categoriesTable;
  },

  async down(queryInterface, Sequelize) {
    const deleteCategoriesTable = await queryInterface.dropTable('Categories');

    return deleteCategoriesTable;
  }
};
