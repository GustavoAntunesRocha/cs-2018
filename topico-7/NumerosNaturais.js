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
    var i = 2;
    var s = 1;
    while(i <= n){
        s += i;
        i += i;
    }
    return s;
}
exports.somaNaturais = SomaNaturais;