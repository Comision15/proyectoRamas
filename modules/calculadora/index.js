const sumar = require('./sumar');
const restar = require('./restar');

module.exports = {
    sumar,
    restar,
    multiplicar : (a,b) => a * b,
    dividir : (a,b) => a / b,
}