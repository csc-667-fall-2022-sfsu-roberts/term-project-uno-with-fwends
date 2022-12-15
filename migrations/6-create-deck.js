"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	return up(queryInterface, Sequelize) {
		const cards = [];
		const colors = [
			"BLUE", "RED", "GREEN", "YELLOW",
		];
		const numbers = [
			"ZERO", "ONE", "TWO", "THREE", "FOUR", "FIVE", "SIX",
				"SEVEN", "EIGHT", "NINE",
		];
		const wildcard = [
			"WILDCARD", "DRAW4",
		];
		const wildcolor = "BLACK";
		for (const wild of wildcard) {
	      cards.push({
	        color: wildColor,
	        value: wild,
	      }, {
	        color: wildColor,
	        value: wild,
	      }, {
	        color: wildColor,
	        value: wild,
	      }, {
	        color: wildColor,
	        value: wild,
	      });
		const powerup = [
				"REVERSE", "DRAW2", "SKIP",
		];
		
    }
	
		
		
	return queryInterface.bulkInsert('cards', cards);
	},
	
	async down (queryInterface, Sequelize){
		return queryInterface.bulkDelete('cards_in_games', {});
		return queryInterface.bulkDelete('cards', {});
	}
	
};
		