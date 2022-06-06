const sumar = require('./sumar');
const restar = require('./restar');
const multiplicar = require('./multiplicar');

module.exports = {
    sumar,
    restar,
    multiplicar,
    dividir : (a,b) => a / b,
}