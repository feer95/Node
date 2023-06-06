const { readConsole } = require('./readTh.js');
const { writeAndRead } = require('./writeTh.js');

const persona = {
  name: 'Paco',
  surename: 'Perez',
  age: 30
};

function pruebas() {
  writeAndRead(persona)
    .then(() => readConsole())
    .catch(error => {
      console.error('Error:', error);
    });
}

pruebas();

