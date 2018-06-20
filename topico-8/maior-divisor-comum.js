/*Gustavo Antunes Rocha*/
/**
 * @param {number} n
 * @returns {boolean} Se n é um numero primo
 */
function mdc(a,b){
    if(a < b || b <= 0){
        return -1;
    }
    var m;
    while(b != 0){
        m = a % b;
        a = b;
        b = m;
    }
    return a;
}
exports.mdc = mdc;