const router = require("../app");
const Book = require('../models/bookModel.js');

// RETO 2 ======================

let libroActual = 
{
    title: 'Libro 1',
    genre: '1',
    author: 'Autor 1',
    price: 12.99,
    imageUrl: '/',
    id_book: 1,
    id_user: 1
};

let arrLib = [];

function getBook(request, response) 
{
    let respuesta = { codigo: 200, Libro: libroActual };
    response.send(respuesta);
}


function createBook(request, response) 
{
    let nuevoLibro = request.query;
    arrLib.push(nuevoLibro);
    let respuesta = {ok: true, message: 'Creado', Libros: arrLib};
    response.send(respuesta);
}

function updateBook(request, response) 
{ 
    let libroEditado = request.query;
    let libroEncontrado = arrLib.filter((book) => book.id === libroEditado.id_book);
    let respuesta;

    if (libroEncontrado.length > 0) 
    {
        let cambio = arrLib.findIndex(book => book.id_book === libroEditado.id_book);
        arrLib.splice(cambio, 1, libroEditado);
        respuesta = { ok: true, Libros: arrLib };
    } 
    else 
    {
        respuesta = { ok: false, mensaje: "Error, libro para editar no encontrado" };
    }
    response.send(respuesta);
}
  

function deleteBook(request, response) 
{
    let libroFuera = request.query.id;
    let libroEncontrado = arrLib.filter((book) => book.id === libroFuera);
    let respuesta;
    
    if (libroEncontrado.length > 0) 
    {
      let cambio = arrLib.findIndex(book => book.title === libroFuera);
      arrLib.splice(cambio, 1);
      respuesta = { ok: true, seBorro: libroFuera, message:'Se borró!' };
    } 
    else 
    {
      respuesta = { ok: false, mensaje: "Error, libro para borrar no encontrado" };
    }
    response.send(respuesta);
}
module.exports = {getBook, createBook, updateBook, deleteBook};




