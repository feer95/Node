const fs = require("fs");

let persona = { name: 'Paco', surname: 'Perez', age: 30 };

fs.writeFile('./datos.json', JSON.stringify(persona), (err) => {
  if (err) {
    console.error('Error al escribir el archivo:', err);
  } else {
      fs.readFile('./datos.json', 'utf-8', (persona, info) => {
          persona = JSON.parse(info);
          console.log('Nombre:', persona.name);
          console.log('Apellido:', persona.surname);
          console.log('Edad:', persona.age);
        });
    }
});

  



