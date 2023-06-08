let usuario = null; 

function getStart(request, response)

{
    let respuesta = {error: true, codigo: 200, mensaje: 'Petición recibida por el cliente'}; 
    response.send(respuesta);
}


function getUser(request, response)
{
    let respuesta;
    if (usuario != null)
        respuesta = {error: false, codigo: 200, data: usuario};
    else
        respuesta = {error: true, codigo: 200, mensaje: "El usuario no existe"};

    response.send(respuesta); 

} 

module.exports = {
    getStart:getStart, getUser:getUser
}; 