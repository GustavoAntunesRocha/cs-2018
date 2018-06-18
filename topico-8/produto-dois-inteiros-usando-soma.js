/*Gustavo Antunes Rocha*/
/**
 * @param {number} a
 * @param {number} b
 * @returns {number} O produto de a e b
 */
function produto(a,b){
    if(a < 0 || b < 0){
        return 1;
    }
    var totalParcelas = a;
    var parcela = b;
    if(b < a){
        totalParcelas = b;
        parcela = a;
    }
    var i = 1;
    var s = 0;
    while(i <= totalParcelas){
        s += parcela;
        i++;
    }
    return s;
}
exports.produto = produto;