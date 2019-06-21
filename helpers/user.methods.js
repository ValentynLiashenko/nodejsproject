const User = require('../services/user.service');

// rewrite using findOrCreate

const GetOrCreate = async (email, name) => {
    let user = await User.getUserByEmail(userEmail);
    if (!user){
        user = await User.register(userEmail, 123123, name);
    }
    return user
}

module.exports = {
    GetOrCreate
}