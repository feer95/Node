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
      reject();
    });
  });
}

async function readConsole() {
  const name = await pregunta('Nombre: ');
  const surname = await pregunta('Apellido: ');
  const age = await pregunta('Edad: ');

  const persona = {
    name,
    surname,
    age: parseInt(age)
  };

  try {
    await fs.writeFile('datos.json', JSON.stringify(persona), 'utf8');
    const datos = await fs.readFile('datos.json', 'utf8');
    console.log('Persona:', JSON.parse(datos));


  } catch (error) {
    return error;
  }
}

// readConsole()

module.exports = { readConsole };
