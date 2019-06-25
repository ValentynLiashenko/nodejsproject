import * as User from '../services/user.service';


const getAll = async (req, res, next) => {
    try {
        return res.json(await User.getAll());
    } catch(error) {
        next(error);
    }
}


const getOne = async (req, res, next) => {
    try {
        return res.json(await User.getOne(req.user));
    } catch(error) {
        next(error);
    }
}



module.exports = {
    getAll,
    getOne
}