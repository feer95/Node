const fs = require('fs');

const persona = {
  name: 'Paco',
  surename: 'Perez',
  age: 30
};

function guardarYLeer(persona) {

    fs.writeFileSync('datos.json', JSON.stringify(persona), 'utf8');
    
    const leerDatos = JSON.parse(fs.readFileSync('datos.json', 'utf8'));
    
    console.log('Persona:', leerDatos);
}

guardarYLeer(persona);
