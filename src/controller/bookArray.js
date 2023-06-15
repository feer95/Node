const router = require("../app");
const Book = require('../models/bookModel.js');

// // RETO 3 ==========================================================

const books = 
[
    new Book('Libro 1', 'Blanda', 'Autor 1', 10.99, '/', 1, 1),
    new Book('Libro 2', 'Dura', 'Autor 2', 12.99, '/', 2, 2),
    new Book('Libro 3', 'Blanda', 'Autor 3', 14.99, '/', 3, 3),
    new Book('Libro 4', 'Blanda', 'Autor 4', 16.99, '/', 4, 4),
];

function getBooks(request, response) 
{
    let respuesta = {codigo: 200, books: books};
    response.send(respuesta);
}

function getBooksId(request, response) 
{
    let libroEncontrado = null;
    const idLibro = request.body.id_book;

    let i = 0;
    while (i < books.length && libroEncontrado === null) 
    {
        if (books[i].id_book == idLibro) {
            libroEncontrado = books[i];
        }
        i++;
    }

    if (libroEncontrado != null) 
    {
        respuesta = { codigo: 200, message: "Encontrado!", data: libroEncontrado };
        response.send(respuesta);
    } 
    else 
    {
        respuesta = { codigo: 404, message: 'No existe!', data: libroEncontrado };
        response.send(respuesta);
    }
}

function createBooks(request, response) 
{
    let newBook = new Book(request.body.title, request.body.genre, request.body.author, request.body.price, request.body.imageUrl, request.body.id_book, request.body.id_user);
    if (newBook != null) 
    {
        books.push(newBook);
        let respuesta = {error: true, message: "Añadido!", data: books};
        response.send(respuesta);
    } 
    else 
    {
        let respuesta = {error: false, message: "No añadido!", data: books};
        response.send(respuesta);
    }
    
}

function updateBooks(request, response) 
{
    let idLibro = request.body.id_book;
    let libroEncontrado = null;

    let i = 0;
    while (i < books.length && libroEncontrado === null) 
    {
        if (books[i].id_book === idLibro) 
        {
            libroEncontrado = books[i];
        }
        i++;
    }

    if (libroEncontrado !== null) 
    {
        libroEncontrado.title = request.body.title;
        libroEncontrado.format = request.body.format;
        libroEncontrado.author = request.body.author;
        libroEncontrado.price = request.body.price;
        libroEncontrado.url = request.body.url;
        libroEncontrado.id_author = request.body.id_author;

        respuesta = { error: true, message: "Editado!", data: books };
        response.send(respuesta);
    } 
    else 
    {
        respuesta = { error: false, message: "No lo encontramos!", data: books };
        response.send(respuesta);
    }
}

function deleteBooks(request, response) 
{
    let libroFuera = request.body.id_book;
    let libroEncontradoIndex = books.findIndex(book => book.id_book === libroFuera);
  
    if (libroEncontradoIndex >= 0) 
    {
      books.splice(libroEncontradoIndex, 1);
      respuesta = { error: true, message: "Eliminado!", data: books };
    } 
    else 
    {
      respuesta = { error: false, message: "No lo encontramos!", data: books };
    }
  
    response.send(respuesta);
}
  

module.exports = { getBooks, getBooksId, createBooks, updateBooks, deleteBooks};
