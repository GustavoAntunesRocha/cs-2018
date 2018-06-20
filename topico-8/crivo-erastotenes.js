/*Gustavo Antunes Rocha*/
/**
 * @param {number} n
 * @returns {boolean} Se n é um numero primo
 */
function crivoErastotenes(n){
    a = new Array(n);
    var i;
    for(i=0;i<=n;i++){
        a[i] = 0;
    }
    var limite = Math.sqrt(n);
    var multiplo;
    for(i=2;i <= limite;i++){
        if(a[i] == 0){
            multiplo = i + i;
            while(multiplo <= n){
                a[multiplo] = 1;
                multiplo += i;
            }
        }
    }
    if(a[n] == 0){
        return true;
    }
    return false;
}
exports.crivoErastotenes = crivoErastotenes;