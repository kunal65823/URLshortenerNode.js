const jwt = require("jsonwebtoken");
const secret = "kunal@secretkey";

function setUser(id,user) {
    return jwt.sign(user,secret,{expiresIn: "1h"});
}

function getUser(token) {
    if(!token){
        return null;
    }
   return jwt.verify(token,secret);
}

module.exports={
    setUser,
    getUser
}



