const sessionIDofUser = new Map();

function setUser(id,user) {
    return sessionIDofUser.set(id,user);
}

function getUser(id) {
    return sessionIDofUser.get(id);
}

module.exports={
    setUser,
    getUser
}



