const logModulo = require('./Log');
const operaciones = require('./operaciones');
const param1 = 23;
const param2 = 10;

logModulo.info('nodsjs inciado');
logModulo.warning('nodejs no esta configurando');
logModulo.error('Error acceso denegado');

console.log(`La suma de ${param1} y ${param2} es ${operaciones.sumar(param1,param2)}`);
console.log(`La resta de ${param1} y ${param2} es ${operaciones.resta(param1,param2)}`);
console.log(`Variable PI: ${operaciones.PI}`)