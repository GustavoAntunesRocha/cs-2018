/*Gustavo Antunes Rocha*/
/**
 * 
 * @param {number} n 
 * 
 * @returns {number} O somatorio dos primeiros n numeros naturais
 */
function somaNaturais(n){
    if(n < 1){
        return 1;
    }
    var i = 1;
    var s = 0;
    while(i <= n){
        s += i;
        i += 1;
    }
    return s;
}
exports.somaNaturais = somaNaturais;