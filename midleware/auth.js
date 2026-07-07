const {getUser} = require("../service/auth");

const restrictLoggedInUseronly = (req, res, next) => {
    const UserUid = req.cookies.session;
    if (!UserUid) {
        return res.redirect("/login");
    }
    const user = getUser(UserUid);
    if(!user){
        return res.redirect("/login");
    }
    req.user = user;
    next();
}

async function checkAuth(req,res,next){
     const UserUid = req.cookies.session;
    
    const user = getUser(UserUid);
    
    req.user = user;
    next();
}

module.exports = {
    restrictLoggedInUseronly,checkAuth
}