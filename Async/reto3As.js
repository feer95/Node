const fs = require('fs/promises');
const readline = require('readline');

async function obtenerDatos() {
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

  try {

    const persona = {
      name: await pregunta('Nombre: '),
      surename: await pregunta('Apellido: '),
      age: await pregunta('Edad: ')
    };

    await fs.writeFile('datos.json', JSON.stringify(persona));
    const datos = await fs.readFile('datos.json', 'utf8');
    console.log('Persona:', JSON.parse(datos));

  } catch (error) {
    console.log('Error:', error);
  }
}

obtenerDatos();
