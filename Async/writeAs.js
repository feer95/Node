const fs = require('fs/promises');

const persona = {
  name: 'Paco',
  surename: 'Perez',
  age: 30
};

async function writeAndRead(persona) {
  try {

    await fs.writeFile('datos.json', JSON.stringify(persona), 'utf8');
    const data = await fs.readFile('datos.json', 'utf8');
    console.log('Persona:', JSON.parse(data));

  } catch (error) {

    console.log('Error:', error);

  }
}

// writeAndRead(persona);

module.exports = { writeAndRead };
