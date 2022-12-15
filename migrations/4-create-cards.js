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
			value: {
				type: Sequelize.ENUM(
				"ZERO", "ONE", "TWO", "THREE", "FOUR", "FIVE", "SIX",
				"SEVEN", "EIGHT", "NINE", "DRAW_TWO", "DRAW_FOUR", "REVERSE", "SKIP",
				"REVERSE"),
				allowNull: false,
			},
			color: {
				type: Sequelize.ENUM(
				"BLUE", "RED", "GREEN", "YELLOW", "BLACK"),
			allowNull: false,
			},
		});
	},
			
			
			
			
	async down (queryInterface, Sequelize){
		return queryInterface.dropTable('cards');
	}
};