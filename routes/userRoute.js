const {Router} = require('express')

const router = Router()

const {signup, login, logout, updateUser} = require('../controllers/userController')


// route for signing up
router.post('/signup',signup)

// route for login
router.post('/login',login)

//route for logout
router.get('/logot',logout)

//route for update profile
router.patch('/update-profile',updateUser)

module.exports = router