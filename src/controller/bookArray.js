const router = require("../app");
const Book = require('../models/bookModel.js');

// RETO 3 ==========================================================

const books = [
    new Book(1, 1, 'Libro 1', 'Blanda', 'Autor 1', 10.99, '/'),
    new Book(2, 2, 'Libro 2', 'Dura', 'Autor 2', 12.99, '/'),
    new Book(3, 3, 'Libro 3', 'Blanda', 'Autor 3', 14.99, '/'),
    new Book(4, 4, 'Libro 4', 'Blanda', 'Autor 4', 16.99, '/'),
    new Book(5, 5, 'Libro 5', 'Dura', 'Autor 5', 18.99, '/'),
    new Book(6, 6, 'Libro 6', 'Blanda', 'Autor 6', 20.99, '/'),
    new Book(7, 7, 'Libro 7', 'Dura', 'Autor 7', 22.99, '/'),
    new Book(8, 8, 'Libro 8', 'Blanda', 'Autor 8', 24.99, '/'),
    new Book(9, 9, 'Libro 9', 'Dura', 'Autor 9', 26.99, '/'),
    new Book(10, 10, 'Libro 10', 'Blanda', 'Autor 10', 28.99, '/')
];

function getBooks(request, response) 
{
    let respuesta = {codigo: 200, books: books};
    response.send(respuesta);
}

function getBooksId(request, response) 
{
    const bookId = request.params.id;
    const libroEncontrado = books.find((book) => book.id === bookId);
    let respuesta;

    if (libroEncontrado) 
    {
        respuesta = { codigo: 200, book: libroEncontrado, message: "Encontrado!" };
        response.send(respuesta);
    } 
    else 
    {
        respuesta = { codigo: 404, message: 'No existe!' };
        response.send(respuesta);
    }
}

function createBooks(request, response) 
{
  let newBook = request.body;
  books.push(newBook);
  let respuesta = {ok: true, message: "Añadido!"};
  response.send(respuesta);
}

function updateBooks(request, response) {
    let libroEditado = request.body;
    let libroEncontrado = books.find((book) => book.id === libroEditado.id);

    let respuesta;

    if (libroEncontrado) 
    {
        libroEncontrado.title = libroEditado.title;
        libroEncontrado.genre = libroEditado.genre;
        libroEncontrado.author = libroEditado.author;
        libroEncontrado.price = libroEditado.price;
        libroEncontrado.imageUrl = libroEditado.imageUrl;
        
        respuesta = { ok: true, message: "Editado!" };
    } 
    else 
    {
        respuesta = { ok: false, message: "No lo encontramos!" };
    }

    response.send(respuesta);
}

function deleteBooks(request, response) 
{
    let libroFuera = request.params.id;
    let libroEncontradoIndex = books.findIndex(book => book.id === libroFuera);

    let respuesta;

    if (libroEncontradoIndex >= 0) 
    {
        books.splice(libroEncontradoIndex, 1);
        respuesta = { ok: true, Eliminado: libroFuera, message: "Eliminado!" };
    } 
    else 
    {
        respuesta = { ok: false, message: "No lo encontramos!" };
    }

    response.send(respuesta);
}

module.exports = { getBooks, getBooksId, createBooks, updateBooks, deleteBooks };
