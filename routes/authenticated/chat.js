const express = require('express');
const router = express.Router(); 

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

router.post('/:id', (request, response) => {
	const { id } = request.params;
	const { message } = request.body;
	const { username } = request.session;
	const timestamp = Date.now();
	const { userId } = request.session;

	request.app.io.emit(`chat:${id}`, {
		sender: username,
		user: userId,
		message,
		timestamp,
	});

	response.sendStatus(200);
});

module.exports = router;  */
