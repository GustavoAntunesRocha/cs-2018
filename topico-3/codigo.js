function trim(valor){
    var str = valor.replace( /\s/g, '');
    
    return str;
}
function ordena(str){
    var i;
    var str2 = trim(str);
    
    var str3 = [];
    var str4 = "";
    console.log(str2);
    for(i=0;i<str2.length;i++){
        str3.push(str2.charAt(i));
        
    }
    str3.sort();
    for(i=0;i<str3.length;i++){
        str4 = str4.concat(str3[i]);
    }
    return str4;
}
console.log(trim("ca sa"));
console.log(ordena("casa"));
exports.ordena = ordena;