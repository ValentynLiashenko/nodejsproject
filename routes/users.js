const userController = require('../controllers/user.controler')
const express = require('express');
const router = express.Router();


router.get("/", userController.getAll);

router.get("/:id", userController.getOne);
router.post('/', userController.createUser)

// router.post('/login', (req, res, next) => {
//     passport.authenticate('local', {
//         successRedirect: '/dashboard',
//         failureRedirect: '/users/login',
//         failureFlash: true
//     })(req, res, next);
// });

module.exports = router