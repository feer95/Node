const { readConsole } = require('./readConsole');
const { writeAndRead } = require('./writeAndReadObject');

readConsole(function(persona) {
  writeAndRead(persona);
});