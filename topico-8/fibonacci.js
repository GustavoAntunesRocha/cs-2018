/*Gustavo Antunes Rocha*/
/**
 * @param {number} n
 * @returns {number} n-esimo numero de fibonacci
 */
function fibonacci(n){
    var a = 0;
    var c = 1;
    if(n == 0 || n == 1){
        return n;
    }
    var i;
    var t;
    for(i = 2;i <= n;i++){
        t = c;
        c += a;
        a = t;
    }
    return c;
}
exports.fibonacci = fibonacci;