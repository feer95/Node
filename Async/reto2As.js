const fs = require('fs/promises');

const persona = {
  name: 'Paco',
  surename: 'Perez',
  age: 30
};

async function guardarYLeer(persona) {

  try {

    await fs.writeFile('datos.json', JSON.stringify(persona));
    const datos = await fs.readFile('datos.json', 'utf8');
    console.log('Persona:', JSON.parse(datos));

  } catch (error) {

    console.log('Error:', error);

  }
};

guardarYLeer(persona);
