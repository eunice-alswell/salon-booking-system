require('dotenv').config()

const express = require('express')

const mongoose = require('mongoose')

const app = express()

const jwt = require('jsonwebtoken')
const User = require('./models/userModel')
const db = process.env.DB
const port = process.env.PORT
const secret = process.env.SECRET

mongoose.connect(db,{useNewUrlParser:true,useUnifiedTopology:true,useCreateIndex:true},()=>{
    app.listen(port,()=>{
        console.info('SYSTEM HAS STARTED')
    })
})

const getTokenFrom = req =>{
    const authorization = req.get('authorization')
    if (authorization && authorization.toLowerCase().startsWith('bearer')){
        return authorization.substring(7)
    }

    return null
}
app.use(async(req,res)=>{
    const token = getTokenFrom(req)
    const decodedToken = jwt.verify(token,secret)

    if(!token || decodedToken.id){
        return res.status(401).json({error:"token missing or invalid token"})
    }

    res.locals.loginInUser = await User.findById(decodedToken.id)

})

app.get('/',(req,res)=>{
res.status(200).send("Welcome to well's beauty salon")
})
