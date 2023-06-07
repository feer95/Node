const fs = require('fs/promises');

const persona = {
    name: 'Paco',
    surename: 'Perez',
    age: 30
  };
  
  fs.writeFile('datos.json', JSON.stringify(persona))
  .then(() => {
    return fs.readFile('datos.json', 'utf8');
  })
  .then((data) => {
    const datosLeido = JSON.parse(data);
    console.log('Persona: ', datosLeido);
  })
  .catch((error) => {
    console.log('Error:', error);
  });