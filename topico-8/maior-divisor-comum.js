/*Gustavo Antunes Rocha*/
/**
 * @param {number} a
 * @param {number} b
 * @returns {boolean} O maior divisor comum entre a e b
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