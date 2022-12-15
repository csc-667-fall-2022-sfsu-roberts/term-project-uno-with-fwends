'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      'users', 
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true, 
          autoIncrement: true,
        },
        email: {
          type: Sequelize.STRING,
          allowNull: false
        },
        password: {
          type: Sequelize.STRING,
          allowNull: false, 
        },
        created_at: {
          type: Sequelize.DATE,
          defaultValue: Sequelize.literal('NOW()'),
          allowNull: false,
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};
