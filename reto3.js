const readline = require('readline');

const datos = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

datos.question('Nombre: ', function(name) {
  datos.question('Apellido: ', function(surename) {
    datos.question('Edad: ', function(age) {
      
      const persona = {
        name,
        surename,
        age: parseInt(age)
      };

      fs.writeFileSync('datos.json', JSON.stringify(persona), 'utf8');

      const datosLeido = JSON.parse(fs.readFileSync('datos.json', 'utf8'));

      console.log('Persona:', datosLeido);
    });
  });
});
