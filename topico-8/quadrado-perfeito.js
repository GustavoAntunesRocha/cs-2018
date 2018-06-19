/*Gustavo Antunes Rocha*/
/**
 * @param {number} n
 * @returns {number} Se n é um quadrado perfeito
 */
function quadradoPerfeito(n){
    if(n < 1){
        return false;
    }
    var i = 1;
    var s = 1;
    while(s < n){
        i += 2;
        s += i;
    }
    return s == n;
}
exports.quadradoPerfeito = quadradoPerfeito;