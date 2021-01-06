const {Router} = require('express')

const router = Router()

const {book,editBook,cancelBook} = require('../controllers/bookingController')

router.post('/book',book)

router.patch('/edit-book',editBook)

router.delete('/cancel-book',cancelBook)

module.exports = router