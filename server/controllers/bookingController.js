
const Book = require('../models/bookingModel')
const sendMail = require('../mail')


const bookCtrl = {}

// making a book
bookCtrl.book = async(req,res) => {
    try{
        const body = req.body
        const newBook = new Book(body)
        const result = await newBook.save()        
        res.status(200).send({message:'Booking is Successful :)'})
        await sendMail(body.email, function(err,result){
            if(err){
                res.status(500).json({
                    message:'Internal error'
                })
            }else{
                res.status(200).send({
                    message:'Email sent....',result
                })
            }
        })
    }catch(error){
        console.log(error)
    }
}

bookCtrl.getBook = async(req,res) =>{
    try {
        let books = await Book.find({})
        if(books){
            res.status(200).send({message:"here you are",books})
        }
        else{
            res.status(400).send({message:"no bookings"})
        }
        
    } catch (error) {
        console.log(error)
    }
}

//editing book
bookCtrl.editBook = async(req,res) =>{
    try {
        const {name,email,date,phone_number} =req.body
        const book = await Book.findOneAndUpdate({_id:req.params._id},{name,email,date,phone_number},{new:true})
        // await new book.save({name,email,date,phone_number})
        if(book){
            res.status(200).send({message:'Update was successful', book})
        }else{
            res.status(404).send({message:'Could not update book'})
        }
        // res.status(201).send({message: 'Update was successful'})
    } catch (error) {
        console.log(error)
        // res.status(400).send({
        //     error:error
        // })
    }
}

//cancel book
bookCtrl.cancelBook = async(req,res) => {
    try {
        const deleteBook = await Book.findByIdAndDelete({_id:req.params._id})
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