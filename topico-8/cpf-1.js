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
    var j = 0;
    for(i=0;i<9;i++){
        j += d[i] * (10-i);
    }
    var k = 0;
    for(i=0;i<10;i++){
        k += d[i] * (11-i);
    }
    var dj = (j * 10) % 11;
    if(dj == 10|| dj == 11){
        dj = 0;
    }
    var dk = (k * 10) % 11;
    if(dk == 10 || dk == 11){
        dk = 0;
    }
    return dj == d[9] && dk == d[10];
}
exports.cpf = cpf;