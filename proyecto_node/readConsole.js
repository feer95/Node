const fs = require('fs');
const readline = require('readline');

function readConsole() {
  function pregunta(pregunta, callback) {
    const datos = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    datos.question(pregunta, function(resp) {
      datos.close();
      callback(resp);
    });
  }

  let persona = {};

  pregunta('Nombre: ', function(resp) {
    persona.nombre = resp;
    pregunta('Apellido: ', function(resp) {
      persona.apellido = resp;
      pregunta('Edad: ', function(resp) {
        persona.edad = parseInt(resp);
        fs.writeFile('datos.json', JSON.stringify(persona), function(err) {
          if (err) {
            console.error('Error al escribir el archivo:', err);
          } else {
            fs.readFile('datos.json', 'utf8', function(err, datos) {
            console.log('Persona:', JSON.parse(datos));             
            });
          }
        });
      });
    });
  });
}

// readConsole();
module.exports = { readConsole };
