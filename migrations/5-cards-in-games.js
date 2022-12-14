"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		return queryInterface.createTable('cards_in_games', {
			game_id: {
				type: Sequelize.INTEGER,
				primaryKey: true,
				allowNull: false,
				references: {
					model: 'games',
					key: 'game_id',
				},
			},
			card_id: {
				type: Sequelize.INTEGER,
				primaryKey: true,
				allowNull: false,
				references: {
					model: 'cards',
					key: 'card_id',
				},
			},
			user_id: {
				type: Sequelize.INTEGER,
				allowNull: true,
				references: {
					model: 'users',
					key: 'id',
				},
			},
			
		});
	},
	
	async down (queryInterface, Sequelize){
		return queryInterface.dropTable('cards_in_games');
	}
};