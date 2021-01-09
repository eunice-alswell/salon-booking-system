const mongoose = require('mongoose')

const bookingSchema = new mongoose.Schema({
    name:{
        type: String,
        required : true,
        lowercase: true,
        
    },
    // time:{
    //     type:Date,
    //     required : true,
    //     unique : true
    // },
    date:{
        type: Date,
        default: Date.now,
        required : true, 
    },
    email:{
        type: String,
        required : true,
        unique : true,
        lowercase:true
    },
    phone_number:{
        type : String,
        required : true,
        unique : true
    }
})

const Book = mongoose.model('book', bookingSchema)

module.exports = Book
