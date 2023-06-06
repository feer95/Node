const fs = require('fs');

const persona = {
  name: 'Paco',
  surename: 'Perez',
  age: 30
};

async function writeAndRead(persona) {
  try {

    await fs.promises.writeFile('datos.json', JSON.stringify(persona), 'utf8');
    const datosLeidos = await fs.promises.readFile('datos.json', 'utf8');
    console.log('Persona:', JSON.parse(datosLeidos));

  } catch (error) {

    console.error('Error:', error);
  }
}

// writeAndRead(persona);

module.exports = { writeAndRead };
