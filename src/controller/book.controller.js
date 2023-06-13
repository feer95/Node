const router = require("../app");
const Book = require('../models/bookModel.js');

// RETO 2 ======================

let libroActual = {
    title: 'Libro 1',
    genre: '1',
    author: 'Autor 1',
    price: 12.99,
    imageUrl: '/',
    id_book: 1,
    id_user: 1
};

function getBook(request, response) 
{
    let respuesta = { codigo: 200, libro: libroActual }; 
    response.send(respuesta);
}

function createBook(request, response) 
{
    let nuevoLibro = request.body; 
    libroActual = nuevoLibro; 
    let respuesta = { ok: true, message: 'Creado', libro: libroActual };
    response.send(respuesta);
}

function updateBook(request, response) 
{
    let libroEditado = request.body;
    if (libroActual.id_book === libroEditado.id_book) {
        libroActual = libroEditado;
        let respuesta = { ok: true, libro: libroActual, message:"Libro editado!" };
        response.send(respuesta);
    } else {
        let respuesta = { ok: false, message: "Error, libro para editar no encontrado" };
        response.send(respuesta);
    }
}

function deleteBook(request, response) 
{
    libroActual = null; 
    let respuesta = { ok: true, message: 'Se borró!' }; 
    response.send(respuesta);
}

module.exports = { getBook, createBook, updateBook, deleteBook };

