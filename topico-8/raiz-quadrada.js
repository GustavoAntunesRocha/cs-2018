/*Gustavo Antunes Rocha*/
/**
 * @param {number} n
 * @param {number} i precisão
 * @returns {number} A raiz quadrada de n
 */
function raiz(n,i){
    if(n <= 0){
        return -1;
    }
    var r = 1;
    while(i >= 0){
        r = (r + (n / r)) / 2;
        i--;
    }
    return r;
}
exports.raiz = raiz;