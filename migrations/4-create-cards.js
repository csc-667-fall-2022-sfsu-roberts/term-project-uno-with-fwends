"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		return queryInterface.createTable('cards', {
			card_id: {
				type: Sequelize.INTEGER,
				primaryKey: true,
				autoIncrement: true,
				allowNull: false,
			},
			
			
			
			
			
	async down (queryInterface, Sequelize){
		return queryInterface.dropTable('cards');
	}
};