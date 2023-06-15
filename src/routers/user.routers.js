const {Router} = require ("express")
const router = Router();
const usersCtrl = require("../controller/user.controller")
const bookCtrl = require("../controller/book.controller")
const arrCtrl = require("../controller/bookArray")

router.use((req, res, next) => 
{
    console.log('Petición recibida del cliente:');
    console.log('URL: "' + req.url + '"');
    console.log('METHOD: "' + req.method + '"');
    console.log('USER: "' + req.headers['user-agent'] + '"');
    next();
});

// Reto 1
router.get('/', usersCtrl.getOk);
router.get('/bye', usersCtrl.getChao);
router.get("/usuario", usersCtrl.getUser);

// Reto 2
router.get('/book', bookCtrl.getBook);
router.post('/book', bookCtrl.createBook);
router.put('/book', bookCtrl.updateBook);
router.delete('/book', bookCtrl.deleteBook);

// Reto 3
router.get('/books', arrCtrl.getBooks);
router.get('/booksFind', arrCtrl.getBooksId);
router.post('/books', arrCtrl.createBooks);
router.put('/books', arrCtrl.updateBooks);
router.delete('/books', arrCtrl.deleteBooks);

module.exports = router;



