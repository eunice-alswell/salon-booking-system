const mongoose = require('mongoose')

const bookingSchema = new mongoose.Schema({
    username:{
        type: mongoose.Schema.Types.ObjectId,
        ref : 'User'
    },
    time:{
        type:Time,
        required : true
    },
    date:{
        type: Date,
        required : true
    },
    email:{
        type:mongoose.Schema.Types.ObjectId,
        ref : 'User'
    },
    phone_number:{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
})