/*Gustavo Antunes Rocha*/
/**
 * @param {number} n
 * @returns {number} O fatorial do numero passado como parametro
 */
function fatorial(n){
    if(n<1){
        return 1;
    }
    var i = 2;
    var f = 1;
    while(i <= n){
        f *= i;
        i += 1;
    }
    return f;
}
exports.fatorial = fatorial;