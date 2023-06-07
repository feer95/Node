const fs = require('fs/promises');
const readline = require('readline');

  function pregunta(pregunta) {
    return new Promise((resolve, reject) => {
      const datos = readline.createInterface({
        input: process.stdin,
        output: process.stdout
      });

      datos.question(pregunta, function(resp) {
        datos.close();
        resolve(resp);
      });
    });
  }

  let persona = {};

  pregunta('Nombre: ')
    .then(resp => {
      persona.nombre = resp;
      return pregunta('Apellido: ');
    })
    .then(resp => {
      persona.apellido = resp;
      return pregunta('Edad: ');
    })
    .then(resp => {
      persona.edad = parseInt(resp);
      return fs.writeFile('datos.json', JSON.stringify(persona));
    })
    .then(() => fs.readFile('datos.json', 'utf8'))
    .then(datos => {
      console.log('Persona:', JSON.parse(datos));
    })
    .catch(error => {
      console.log('Error:', error);
    });

