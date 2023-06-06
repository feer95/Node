const fs = require('fs');
const readline = require('readline');

async function readConsole(callback) {
  const datos = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  datos.question('Nombre: ', async function(name) {
    datos.question('Apellido: ',async function(surename) {
      datos.question('Edad: ', async function(age) {
        datos.close();

        const persona = {
          name,
          surename,
          age: parseInt(age)
        };

        await fs.promises.writeFile('datos.json', JSON.stringify(persona), 'utf8');
        const datosLeidos = await fs.promises.readFile('datos.json', 'utf8');
        const personaLeida = JSON.parse(datosLeidos);

        callback(personaLeida);
        return console.log('Persona:', personaLeida);
      });
    });
  });
}

// readConsole();
module.exports = { readConsole };

