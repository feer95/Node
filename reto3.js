const fs = require('fs/promises');
const readline = require('readline');

const datos = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

datos.question('Nombre: ', async function(name) {
  datos.question('Apellido: ', async function(surename) {
    datos.question('Edad: ', async function(age) {
      datos.close();
      
      const persona = {
        name,
        surename,
        age: parseInt(age)
      };

      await fs.writeFile('datos.json', JSON.stringify(persona), 'utf8');
      const datosLeidos = await fs.readFile('datos.json', 'utf8');
      console.log('Persona:', JSON.parse(datosLeidos));
    });
  });
});
