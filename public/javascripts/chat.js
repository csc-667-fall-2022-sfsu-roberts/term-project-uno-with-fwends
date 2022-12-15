const socket = io();

const messages = document.querySelector("#messages");
const input = document.querySelector("#message");
const messageTemplate = document.querySelector("#message-content");


input.addEventListener("keydown", (event) => {
    if(event.keyCode === 13){
        //const message = event.target.value; 

        fetch("/chat/0", { 
            method: "post", 
            header: {"Content-Type": "application/json"}, 
            body: JSON.stringify({message: event.target.value}),
        })
        .then(() => {
            document.querySelector("#message").value = "";
          })
          .catch((error) => console.log(error));
    }
});

socket.on("chat:0", ({username, message, timestamp}) => {
    console.log({username, message, timestamp});
    const content = messageTemplate.content.cloneNode(true);

    content.querySelector(".username").innerText = username; 
    content.querySelector(".message").innerText = message; 
    content.querySelector(".timestamp").innerText = timestamp; 

    messages.appendChild(content); 
});