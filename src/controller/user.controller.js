let usuario = null; 

function getStart(request, response)
{
    let respuesta = {error: true, codigo: 200, message: 'Petición recibida por el cliente'}; 
    response.send(respuesta);
}

function getUser(request, response) 
{
    let respuesta;
    if (usuario != null) 
    {
      respuesta = { error: false, codigo: 200, Eres: usuario };
    } 
    else 
    {
      respuesta = { error: true, codigo: 200, message: "El usuario no existe" };
    }
    response.send(respuesta);
}
  

function getOk(request, response) 
{
    let respuesta = { ok: true, message: 'Recibido!' };
    response.send(respuesta);
}

function getChao(request, response) 
{
    let respuesta = { ok: true, message: 'Adios!' };
    response.send(respuesta);
}

module.exports = { getStart, getUser, getOk, getChao };