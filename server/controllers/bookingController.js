const { findByIdAndUpdate, findOneAndUpdate } = require('../models/bookingModel')
const Book = require('../models/bookingModel')


const bookCtrl = {}

// making a book
bookCtrl.book = async(req,res) => {
    try{
        const body = req.body
        const newBook = new Book(body)
        const result = await newBook.save()
        res.status(200).send({message:'Booking is Successful :)'})
    }catch(error){
        console.log(error)
    }
}

//editing book
bookCtrl.editBook = async(req,res) =>{
    try {
        const {name,time,email,date,phone_number} =req.body
        const book = Book.findOneAndUpdate({_id:req.params._id},{name,time,email,date,phone_number})
        const updatedBook = await Book.save()
        res.status(201).send({message: 'Update was successful',updatedBook})
    } catch (error) {
        res.status(400).send({
            error:error
        })
    }
}

//cancel book
bookCtrl.cancelBook = async(req,res) => {
    try {
        const deleteBook = await Book.findOneAndDelete({_id:req.params._id})
        res.status(200).send({
            message : 'cancelled'
        })
    } catch (error) {
       res.status(400).send({
           error:error
       }) 
    }
}

module.exports = bookCtrl