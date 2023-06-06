const fs = require('fs/promises');

const persona = {
  name: 'Paco',
  surename: 'Perez',
  age: 30
};

async function guardarYLeer(persona) {
  try {

    await fs.writeFile('datos.json', JSON.stringify(persona), 'utf8');
    const datosLeidos = await fs.readFile('datos.json', 'utf8');
    console.log('Persona:', JSON.parse(datosLeidos));

  } catch (error) {

    console.error('Error:', error);
  }
}

guardarYLeer(persona);

