/*Gustavo Antunes Rocha*/
/**
 * @param {number} n
 * @returns {number} O valor de pi
 */
function pi(n){
    if(n < 1){
        return -1;
    }
    var i = 1;
    var s = -1;
    var d = -1;
    var p = 0;
    while(i <= n){
        d += 2;
        s *= -1;
        p += (4 * s) / d;
        i++;
    }
    return p;
}
exports.pi = pi;