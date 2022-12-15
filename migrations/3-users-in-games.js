"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		return queryInterface.createTable("users_in_games", {
			game_id: {
				type: Sequelize.INTEGER,
				primaryKey: true,
				allowNull: false,
				references: {
					model: 'games',
					key: 'game_id',
				},
			},
			id: {
				type: Sequelize.INTEGER,
				primaryKey: true,
				allowNull: false,
				references: {
					model: 'users',
					key: 'id',
				},
			},
			game_state: {
				type: Sequelize.ENUM("WON", "LOST", "Playing"),
				allowNull: false,
			},
			game_order: {
				type: Sequelize.INTEGER,
				allowNull: false,
			},
			turn_order: {
				type: Sequelize.INTEGER,
				allowNull: true,
			},
			host_user: {
				type: Sequelize.BOOLEAN,
				allowNull: false,
			},
			uno_called: {
				type: Sequelize.INTEGER,
				allowNull: false,
				defaultValue: 0;
			},
			had_uno: {
				type: Sequelize.INTEGER, 
				allowNull: false,
				defaultValue: 0,
			},
		});
	},
	
	async down (queryInterface, Sequelize){
		return queryInterface.dropTable('users_in_games');
	}
};