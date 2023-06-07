const { readConsole } = require('./readAs.js');
const { writeAndRead } = require('./writeAs.js');

const persona = {
    name: 'Paco',
    surename: 'Perez',
    age: 30
  };

async function pruebas() {
  try {
     await readConsole();
     await writeAndRead(persona);

  } catch (error) {
    console.error('Error:', error);
  }
}

pruebas();

    
