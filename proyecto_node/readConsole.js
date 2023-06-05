const fs = require('fs');
const readline = require('readline');

function readConsole(callback) {
  const datos = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  datos.question('Nombre: ', function(name) {
    datos.question('Apellido: ', function(surname) {
      datos.question('Edad: ', function(age) {
        datos.close();

        const persona = {
          name,
          surname,
          age: parseInt(age)
        };

        fs.writeFileSync('datos.json', JSON.stringify(persona), 'utf8');

        const datosLeido = JSON.parse(fs.readFileSync('datos.json', 'utf8'));

        callback(datosLeido);
      });
    });
  });
}

module.exports = { readConsole };
