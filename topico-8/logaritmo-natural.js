/*Gustavo Antunes Rocha*/
/**
 * @param {number} n
 * @param {number} k
 * @returns {number} O Logaritmo
 */
function logaritmoNatural(n,k){
    if(n < 1 || k < 2){
        return -1;
    }
    var i = 2;
    var e = 1 + n;
    var numerador = n;
    var denominador = 1;
    while(i <= k){
        numerador *= numerador;
        denominador *= i;
        e += numerador / denominador;
        i++;
    }
}