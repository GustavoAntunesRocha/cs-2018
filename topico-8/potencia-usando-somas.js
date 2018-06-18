/*Gustavo Antunes Rocha*/
const operacao = require("../produto-dois-inteiros-usando-soma");
/**
 * @param {number} x
 * @param {number} y
 * @returns {number} O valor de x elevado a y
 */
function potencia(x,y){
    if(x < 0 || y < 0){
        return -1;
    }
    var potencia = 1;
    var i = 1;
    while(i <= y){
        potencia = operacao.produto(potencia, x);
        i++;
    }
    return potencia;
}
exports.potencia = potencia;