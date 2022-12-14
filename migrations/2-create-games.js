"use strict" 

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
	
		return queryInterface.createTable('games', {
		game_id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true,
			allowNull: false,
		},
		started: {
			type: Sequelize.BOOLEAN,
			allowNull: false,
		
		},
		ended: {
			type: Sequelize.BOOLEAN,
			allowNull: false,
			
		}
		});
	},
	
	async down (queryInterface, Sequelize) {
		return queryInterface.dropTable('games');
	
	}
};







}