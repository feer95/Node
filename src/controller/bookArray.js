const router = require("../app");
const Book = require('../models/bookModel.js');

// RETO 3 ==========================================================

const books = 
[
  new Book(1, 1, 'Libro 1', 'Tipo 1', 'Autor 1', 10.99, '/'),
  new Book(2, 2, 'Libro 2', 'Tipo 2', 'Autor 2', 12.99, '/'),
  new Book(3, 3, 'Libro 3', 'Tipo 3', 'Autor 3', 14.99, '/'),
  new Book(4, 4, 'Libro 4', 'Tipo 4', 'Autor 4', 16.99, '/'),
  new Book(5, 5, 'Libro 5', 'Tipo 5', 'Autor 5', 18.99, '/'),
  new Book(6, 6, 'Libro 6', 'Tipo 6', 'Autor 6', 20.99, '/'),
  new Book(7, 7, 'Libro 7', 'Tipo 7', 'Autor 7', 22.99, '/'),
  new Book(8, 8, 'Libro 8', 'Tipo 8', 'Autor 8', 24.99, '/'),
  new Book(9, 9, 'Libro 9', 'Tipo 9', 'Autor 9', 26.99, '/'),
  new Book(10, 10, 'Libro 10', 'Tipo 10', 'Autor 10', 28.99, '/')
];

function getBooks(request, response) 
{
  let respuesta = { codigo: 200, books: books };
  response.send(respuesta);
}

function getBooksId(request, response) 
{
    const bookId = request.params.id;
    const librosEncontrado = books.find((book) => book.id === bookId);
    let respuesta;

    if (librosEncontrado) 
    {
        respuesta = {codigo: 200, book: librosEncontrado, message: "Encontrado!"};
        response.send(respuesta)
    } 
    else 
    {
        respuesta = {codigo: 404, message: 'No existe!'};
        response.send(respuesta)
    }
}
  

function createBooks(request, response) 
{
    let newBook = request.query;
    books.push(newBook);
    let respuesta = {ok: true, message: "Añadido!" , id: request.query.id_book};
    response.send(respuesta);
}

function updateBooks(request, response) 
{
    let librosEditado = request.query;
    let librosBusca = books.filter((book) => book.id === librosEditado.id_book);
    let respuesta;

    if (librosBusca.length > 0) 
    {
        let posicion = books.findIndex(book => book.id_book === librosEditado.id_book);
        books.splice(posicion, 1);
        books.push(librosEditado);
        respuesta = { ok: true, ID: librosEditado.id_book, message: "Editado!" };
    } 
    else 
    {
        respuesta = { ok: false, message: "No lo encontramos!"};
    }
    response.send(respuesta);
}

function deleteBooks(request, response) 
{
    let librosFuera = request.query.id;
    let librosBusca = books.findIndex(book => book.id_book === librosFuera);
    let respuesta;

    if (librosBusca >= 0) 
    {
        books.splice(librosBusca, 1);
        respuesta = { ok: true, Eliminado: librosFuera, message: "Eliminado!" };
    } 
    else 
    {
        respuesta = { ok: false, message: "No lo encontramos!" };
    }
    response.send(respuesta);
}
module.exports = { getBooks, getBooksId, createBooks, updateBooks, deleteBooks };
