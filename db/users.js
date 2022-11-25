const db = require("./index");

const REGISTER_USER = 
"INSERT INTO users(email, password) VALUES (${username}, ${password}) RETURNING id, email";

const FIND_USER = "SELECT * FROM users WHERE email=${username} AND password=${password}"; 


const login = ({ username, password }) =>{
    return db.one(FIND_USER, { username, password })
};

const register = ({ username, password }) =>{
  return db.one(REGISTER_USER, { username, password })
    
};

module.exports = { login, register }; 
