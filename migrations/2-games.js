"use strict" 

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
	
		await queryInterface.createTable('games', {
		game_id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true,
			allowNull: false,
		},
		create_date: {
			type: Sequelize.DATE,
			defaultValue: Sequelize.literal('NOW()'),
			allowNull: false,
		},
		started: {
			type: Sequelize.BOOLEAN,
			allowNull: false,
		
		},
		ended: {
			type: Sequelize.BOOLEAN,
			allowNull: false,
			
		},
		join_id: {
			type: Sequelize.STRING,
			defaultValue: '',
			allowNull: false,
		}
		});
	},
	
	async down (queryInterface, Sequelize) {
		await queryInterface.dropTable('games');
	
	}
};







}