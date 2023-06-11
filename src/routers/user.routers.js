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
router.get('/libro', bookCtrl.getBook);
router.post('/libro', bookCtrl.createBook);
router.put('/libro', bookCtrl.updateBook);
router.delete('/libro', bookCtrl.deleteBook);

// Reto 3
router.get('/libros', arrCtrl.getBooks);
router.get('/libros/id', arrCtrl.getBooksId);
router.post('/libros', arrCtrl.createBooks);
router.put('/libros', arrCtrl.updateBooks);
router.delete('/libros', arrCtrl.deleteBooks);

module.exports = router;



