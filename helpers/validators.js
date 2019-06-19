
const userRegisterDataValidation = (email, password, password2, first_name) => {
    if(!email){
        return res.json({
            'error': 'enter email!'
        })
    }
    if(!password || !password2){
        return res.json({
            'error': 'enter passwords'
        })
    }
    if(!first_name){
        first_name = null
    }
    if(password!==password2){
        return res.json({
            'error': 'password dont match'
        })
    }
    return true
}

module.exports = {
    userRegisterDataValidation
}