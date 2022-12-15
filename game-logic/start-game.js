const Games = require("../db/games"); 

const startGame = (game_id, io) => {
    Games.setPlayerOrder(game_id)
    .then((seats/* array of user ids */) =>{
        // first entry in seats array is current player 
    })
    .then((player_hands) = {

    })
    .then((player_hands) => {
        // Broadcast the game state
        io.emit(`game:${game_id}:start`, {
        game: {
            user_id, 
            game_id, 
            hand, 
            other_players: {

            },
            is_current, 
            discard_card,
         },  
        }); 
    })
}; 

module.exports = startGame;  