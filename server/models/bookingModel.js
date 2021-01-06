const mongoose = require('mongoose')

const bookingSchema = new mongoose.Schema({
    name:{
        type: String,
        required : true
    },
    // time:{
    //     type:Date,
    //     required : true,
    //     unique : true
    // },
    date:{
        type: Date,
        required : true
    },
    email:{
        type: String,
        required : true,
        unique : true
    },
    phone_number:{
        type : String,
        required : true,
        unique : true
    }
})

const Book = mongoose.model('book', bookingSchema)

module.exports = Book
