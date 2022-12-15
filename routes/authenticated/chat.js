const express = require('express');
const router = express.Router(); 

/* GET home page. */
router.post("/:id", (request, response) => {
  const { id } = request.params; 
  const { username } = request.session; 
  const { message } = request.body;
  const timestamp = Date.now(); 

  request.app.io.emit(`chat:${id}`, { username, message, timestamp}); 
  
  response.sendStatus(200); 
});

module.exports = router;  


/* const express = require('express');
const router = express.Router();

router.post('/:id', (req, res, next) =>{
  const {id} = req.params;
  const {message} = req.body;
  const {username} = req.session;
  const timestamp = Date.now();

  req.app.io.emit(`chat:${id}`, {
    sender: username,
    message,
    timestamp,
  })

  res.sendStatus(200);

})


module.exports = router;  */