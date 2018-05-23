/*Gustavo Antunes Rocha*/
/**
 * 
 * @param {number} x 
 * @param {number} y
 * 
 * @returns {number} O resto da divisao inteira de x por y
 */
function resto(x,y){
    if(y < 0 || x <= 0){
        return 1;
    }
    var s = x;
    while(y <= s){
        s -= y;
    }
    return s;
}