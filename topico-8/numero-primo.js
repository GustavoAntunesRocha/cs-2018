/*Gustavo Antunes Rocha*/
/**
 * @param {number} n
 * @returns {boolean} Se n é um numero primo
 */
function primo(n){
    if(n <= 1){
        return false;
    }
    var i = 2;
    while(i < n){
        if(n % i == 0){
            return false;
        }
        i++;
    }
    return true;
}
exports.primo = primo;