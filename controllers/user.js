const User = require("../models/user");
const {setUser} = require("../service/auth");
const {v4: uuidv4} = require("uuid");
async function handleuserSignup(req, res) {
    const { name, email, password } = req.body;

    await User.create({
        name,
        email,
        password,
    });

    return res.redirect("/");
}

async function handleuserlogin(req, res) {
    const { email, password } = req.body;
    const user = await User.findOne({email, password});
    if(!user){
        return res.render("login", {error: "Invalid email or password"});
    }
    const token = setUser(user);
    res.cookie("session", token, {
        httpOnly: false,
        sameSite: "lax",
    });
    return res.redirect("/");
}

module.exports = {
    handleuserSignup,
    handleuserlogin,
};