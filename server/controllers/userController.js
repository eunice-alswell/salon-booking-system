const User = require('../models/userModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


const handleError = () => {
    let err = { firstname: '', lastname:'', email:'', password:'', phone:'', comparePassword:''}
    switch (error.message) {
        case 'incorrect firstname':
            err.firstname = 'firstname does not exist'
        case 'incorrect lastname':
            err.lastname= 'lastname does not exist'
        case 'incorrect email':
            err.email='invalid email'
        case 11000: 
            err.email='email already exist'
            break;
    
        default:
            return ''
    }

    if(error.message.includes('user validation failed')){
        Object.values(error.errors).forEach(({properties}) => {
            err[properties.path] = properties.message
        })
    }
    return err
}

const fortoken = {
    username = user.username,
    id = user._id
}

const secret = process.env.SECRET

const userCtrl = {}

userCtrl.signup = async(req,res)=>{
    try {
        const body = req.body
        const salt = 10
        body.password = bcrypt.hash(password,salt)
        const newUser = new User(body)
        const result = newUser.save()
        const accesstoken = jwt.sign(fortoken,secret)
        res.status(200).send({message:'Account is successfully created',result,accesstoken})
        
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
        const username = req.body.username
        await User.findByIdAndUpdate({username,body})
        const user = await User.findOne(username)
        res.status(200).send({message:'profile has been updated',user})
    } catch (error) {
        const warning = handleError(error)
        res.status(400).json({warning})
    }
}

const { roles } = require('./roles')
 
exports.grantAccess = function(action, resource) {
 return async (req, res, next) => {
  try {
   const permission = roles.can(req.user.role)[action](resource);
   if (!permission.granted) {
    return res.status(401).json({
     error: "You don't have enough permission to perform this action"
    });
   }
   next()
  } catch (error) {
   next(error)
  }
 }
}
 
exports.allowIfLoggedin = async (req, res, next) => {
 try {
  const user = res.locals.loggedInUser;
  if (!user)
   return res.status(401).json({
    error: "You need to be logged in to access this route"
   });
   req.user = user;
   next();
  } catch (error) {
   next(error);
  }
}

userCtrl.logout = async(req,res)=>{
    req.logout()
    res.redirect('/')
}

module.exports = userCtrl