const User = require('../models/userModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


const handleError = () => {
    let err = { firstname: '', lastname:'', email:'', password:'', phone:'', password:''}
    if (error.message ==="incorrect firstname"){
        err.firstname = 'this firstname does not exist'
    }
    if (error.message ==="incorrect lastname"){
        err.lastname = 'this lastname does not exist'
    }
    if(error.message === 'incorrect username'){
        err.username = 'that username does not exit'
    }

    if (error.message === 'incorrect email'){
        err.email = 'that email is not valid'
    }

    if (error.message === 'incorrect password'){
        err.password = 'the password is incorrect'
    }

    if (error.code === '11000'){
        err.email   = 'that email is registered already'
    }
    if(error.message.includes('user validation failed')){
        Object.values(error.errors).forEach(({properties}) => {
            err[properties.path] = properties.message
        })
    }
    return err
}

const fortoken= {
    username : User.username,
    id : User._id
}

const secret = process.env.SECRET

const userCtrl = {}
 
userCtrl.signup = async(req,res)=>{
    try {
        const body = req.body
        const salt = 10
        body.password = await bcrypt.hash(body.password,salt)
        const newUser = new User(body)
        const result = await newUser.save()
        res.status(200).send({message:'Account is successfully created', result})       
    } catch (error) {
        const warning = handleError(error)
        res.status(400).json({warning})
    }
}

userCtrl.login = async(req,res) =>{
    try {
        const body = req.body
        const user = await User.findOne({username:body.username})
        const validpassword = user === null
        ? false
        : await bcrypt.compare(body.password,user.password)

        if (!(user && validpassword)){
            return res.status(401).send('Invalid username or password')
        }

        const accesstoken = jwt.sign(fortoken,secret)

        res.status(200).send({message:'Login was successfull',accesstoken,fortoken})
    } catch (error) {
        const warning = handleError(error)
        res.status(400).json({warning})    
    }
}

userCtrl.updateUser = async(req,res)=>{
    try {
        const body = req.body
        const user = await User.findByIdAndUpdate(body)
        res.status(200).send({message:'profile has been updated',user})
    } catch (error) {
        const warning = handleError(error)
        res.status(400).json({warning})
    }
}

// const { roles } = require('./roles')
 
// exports.grantAccess = function(action, resource) {
//  return async (req, res, next) => {
//   try {
//    const permission = roles.can(req.user.role)[action](resource);
//    if (!permission.granted) {
//     return res.status(401).json({
//      error: "You don't have enough permission to perform this action"
//     });
//    }
//    next()
//   } catch (error) {
//    next(error)
//   }
//  }
// }
 
// exports.allowIfLoggedin = async (req, res, next) => {
//  try {
//   const user = res.locals.loggedInUser;
//   if (!user)
//    return res.status(401).json({
//     error: "You need to be logged in to access this route"
//    });
//    req.user = user;
//    next();
//   } catch (error) {
//    next(error);
//   }
// }

userCtrl.logout = async(req,res)=>{
    req.logout()
    res.redirect('/')
}

module.exports = userCtrl