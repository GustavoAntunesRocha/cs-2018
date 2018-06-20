/*Gustavo Antunes Rocha*/
/**
 * @param {number} d um array de digitos do cpf
 * @returns {boolean} verdadeiro se a regra de formacoes de digitos é atendida, falso se o contrario
 */
function cpf(d){
    var i;
    for(i=0;i<11;i++){
        if(d[i] == null){
            return false;
        }
    }
    var j;
    for(i=1;i<=9;i++){
        j += d[i];
    }
    var k;
    for(i=2;i<=10;i++){
        k += d[i];
    }
    var dj = (j % 11) % 10;
    var dk = (k % 11) % 10;
    return dj == d[9] && dk == d[10];
}
exports.cpf = cpf;