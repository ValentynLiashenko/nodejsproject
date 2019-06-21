const User = require('../services/user.service');

const GetOrCreate = async (email, first_name, last_name) => {
    let user = await User.getUserByEmail(email);
    if (!user){
        user = await User.register(email, 123123, first_name, last_name);
    }
    return user
}

module.exports = {
    GetOrCreate
}