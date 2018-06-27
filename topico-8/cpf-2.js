/*Gustavo Antunes Rocha*/
/**
 * @param {number} d um array de digitos do cpf
 * @returns {boolean} verdadeiro se a regra de formacoes de digitos é atendida, falso se o contrario
 */
function cpf2(d){
    var i;
    for(i=0;i<11;i++){
        if(d[i] == null){
            return false;
        }
    }
    var c;
    var p = d[8];
    var s = d[8];
    for(c=8;c>=0;c--){
        p += d[c];
        s += p;
    }
    console.log("p: "+p+" s: "+s);
    var j = (s * 10) % 11;
    if(j == 10|| j == 11){
        j = 0;
    }
    var k = ((s - p + d[9]) * 10) % 11;
    if(k == 10|| k == 11){
        k = 0;
    }
    console.log("j: "+j+" k: "+k);
    return j == d[9] && k == d[10];
}
exports.cpf2 = cpf2;