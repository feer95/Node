const fs = require('fs/promises');

const persona = {
  name: 'Paco',
  surename: 'Perez',
  age: 30
};

const writeAndRead = (persona) => {
  return fs.writeFile('datos.json', JSON.stringify(persona), 'utf8')
    .then(() => fs.readFile('datos.json', 'utf8'))
    .then(data => {
      console.log('Persona:', JSON.parse(data));
    })
    .catch(error => {
      console.log('Error:', error);
    });
};

// writeAndRead(persona);

module.exports = { writeAndRead };


