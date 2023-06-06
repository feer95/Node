const { readConsole } = require('./readConsole');
const { writeAndRead } = require('./writeAndReadObject');

const persona1 = {
  name: 'Paco',
  surename: 'Perez',
  age: 30
};

readConsole(function(persona) {
  writeAndRead(persona1);
});