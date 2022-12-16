const socketsIO = require("socket.io");
const sessionMiddleware = require("../app-config/sessions")

const initialize = (httpServer, app) => {
    const io = new socketsIO.Server(httpServer); 

    const wrap = (middleware) => (socket, next) =>
        middleware(socket.request, {}, next);

    io.use(wrap(sessionMiddleware));

    io.use((socket, next) => {
        const session = socket.request.session;

        if(session !== undefined && session.authenticated === true){
            next(); 
        } else {
            next(new Error("Unauthorized"));
        }
    });

    io.on("connection", (socket) => {
        console.log({
            message: "Connection happened",
            session: socket.request.session, 
        }); 
    });
    app.io = io; 
};

module.exports = initialize; 
