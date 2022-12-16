const socket = io();

const messages = document.querySelector("#messages");
const input = document.querySelector("#message");
const messageTemplate = document.querySelector("#message-content");


input.addEventListener("keydown", (event) => {
    if(event.keyCode === 13){
        const message = event.target.value; 

        fetch("/chat/0", { 
            method: "post", 
            header: {"Content-Type": "application/json"}, 
            body: JSON.stringify({ message }),
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


/* const sendMessage = document.getElementById('send-message-button');

sendMessage.onclick = () => {
  let message = document.getElementById('send-message-text');
  fetch("/api/chat/0", {
    method: "post",
    headers: {'Content-Type' : "application/json"},
    body: JSON.stringify({message: message.value}),
  })
    .then(() =>{
      message.value = "";
    })
    .catch((err) => console.log(err));
};

socket.on("chat:0", ({sender, message, timestamp}) => {
  console.log({sender, message, timestamp});

  const div = document.createElement("div");
  div.classList.add("message");
  const content = document.createElement("p");
  let newDate = new Date(timestamp).toLocaleTimeString();
  let str = sender + ": " + message + " " + newDate;
  content.innerText = str;
  div.appendChild(content);

  let chatBox = document.getElementById("global-chat");
  chatBox.appendChild(div);

}) */