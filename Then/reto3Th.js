const fs = require('fs/promises');
const readline = require('readline');

function obtenerDatos() {
  function pregunta(pregunta) {
    return new Promise((resolve, reject) => {
      const datos = readline.createInterface({
        input: process.stdin,
        output: process.stdout
      });

      datos.question(pregunta, function(resp) {
        datos.close();
        resolve(resp);
        reject();
      });
    });
  }

  pregunta('Nombre: ')
    .then(name => pregunta('Apellido: ')
      .then(surname => pregunta('Edad: ')
        .then(age => {
          const persona = {
            name,
            surname,
            age
          };

          return fs.writeFile('datos.json', JSON.stringify(persona));
        })
      )
    )
    .then(() => fs.readFile('datos.json', 'utf8'))
    
    .then(datos => {
      console.log('Persona:', JSON.parse(datos));
    })
    .catch(error => {
      console.log('Error:', error);
    });
}

obtenerDatos();
