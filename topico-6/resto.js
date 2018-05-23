/*Gustavo Antunes Rocha*/
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