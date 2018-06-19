/*Gustavo Antunes Rocha*/
/**
 * @param {number} x
 * @param {number} y
 * @param {number} k
 * @returns {number} A razao aurea
 */
function razaoAurea(x,y,k){
    if(x < 0 || x > y || k <= 0){
        return -1;
    }
    var c = y;
    var a = x;
    var i = 1;
    var t;
    while(i <= k){
        t = c;
        c += a;
        a = t;
        i++;
    }
    return c / a;
}
exports.razaoAurea = razaoAurea;