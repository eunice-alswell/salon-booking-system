const {Router} = require('express')

const router = Router()

const {book,editBook,cancelBook, getBook} = require('../controllers/bookingController')

router.post('/book',book)

router.get('/books',getBook)

router.put('/:_id',editBook)

router.delete('/:_id',cancelBook)

module.exports = router