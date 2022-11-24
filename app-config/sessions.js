const session = require("express-session");

const sessionInstance = session({
    secret: "aseriewquorijqweriuiou834p1098349puqjkedafhas",
    cookie: {maxAge: 24 * 60 * 60 }, 
    resave: false, 
    saveUninitialized: true, 
});

module.exports = sessionInstance; 
 