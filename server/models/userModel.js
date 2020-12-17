const mongoose = require('mongoose')
const bcrypt = require(bcrypt)

const userSchema = new mongoose.Schema({
    firstname:{
        type: String,
        required: true
    },
    lastname:{
        type: String,
        required: true
    },
    phone: {
        type: String,
        minlength: [10, 'minimum length should be 10'],
        maxlength: [14, 'maximum length should be 14'],
        unique: true,
        required: [true, 'Phone number is required']
    },
    email: {
        type: String,
        unique: true,
        required: [true, 'Email is required']
    },
    username:{
        type: String,
        required:[true, 'Username is required'],
        unique: true
     },
    password:{
        type: String,
        minlength: 6,
        required: [true, 'Password is required']
    },
    role:{
        type:String,
        default:'customer',
        enum:['admin','customer']
        
    }
})

const User = mongoose.model('user',userSchema)

userSchema.pre('save', async function(next){
    const salt = bcrypt.genSalt()
    this.password = await bcrypt.hash(this.password,salt)
    console.log(this.password)
next()
})

module.exports = User