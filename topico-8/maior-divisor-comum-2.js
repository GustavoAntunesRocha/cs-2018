/*Gustavo Antunes Rocha*/
/**
 * @param {number} a
 * @param {number} b
 * @returns {boolean} O maior divisor comum entre a e b
 */
function mdc2(a,b){
    if(a < b || b <= 0){
        return -1;
    }
    while(a != b){
        if(a > b){
            a -= b;
        }
        else{
            b -= a;
        }
    }
    return a;
}
exports.mdc2 = mdc2;