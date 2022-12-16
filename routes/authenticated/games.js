const express = require('express');
const router = express.Router();

const Games = require("../../db/games");
const { PLAYERS_NEEDED } = require('../../config/games');

const startGame = require("../../game-logic/start-game"); 

router.post("/create", (request, response) => {
  const { user_id } = request.session;
  const { title } = request.body; 
  
  Games.create(user_id, title)
    .then(({ game_id }) => {
      response.redirect(`/games/${game_id}`); 
    })
    .catch((error) => {
      console.log(error);
      response.status(500).send(); 
    });
}); 

router.post("/:id/join", (request, response) => {
  const {id: game_id} = request.params; 
  const { user_id } = request.session;

  Games.join(game_id, user_id)
    .then(() => {
      response.redirect(`/games/${game_id}`); 
    })
    .catch((error) => {
      console.log(error);
      response.status(500).send(); 
    });
}); 

router.post("/:id/play", (request, response) =>{
  const { card_id } = request.body; 
  const { id: game_id } = request.params;
  const { user_id } = request.session; 

  Games.isUserInGame(user_id, game_id)
  // db.one(SELECT * FROM game_users WHERE game_id=${game_id})
  // .then(() => true)
  // .catch(() => true)
  // yes: continue

  .then(isUserInGame =>{
    // is it user_id's turn? 
    // yes: continue
    // no: ignore

  })

  //Broadcast the game state (different from each user)
  // Broadcast the game state
  io.emit(`game:${game_id}:update`, {
        user_id, 
        card_id_played,
        game_id, 
        hand, 
        other_players: {
          // show the number of cards in order player's name
        },
        is_current, 
        discard_card,
  });
})

/* GET home page. */
router.get("/:id", (request, response) => {
  const { id } = request.params

  Games.count(id)
  .then(( { count }) => {
      response
        .render("authenticated/games", { 
          id, 
          joined_count: count, 
          start_count: PLAYERS_NEEDED,
    });
    if(count === PLAYERS_NEEDED){
      startGame(id, request.app.io); 
    }
  })
  .catch((error) => {
    console.log(error);
    response.status(500).send(); 
  });
});

module.exports = router;