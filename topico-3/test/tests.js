(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
function trim(valor){
    var str = valor.replace( /\s/g, '');
    
    return str;
}
function ordena(str){
    var i;
    var str2 = trim(str);
    
    var str3 = [];
    var str4 = "";
    for(i=0;i<str2.length;i++){
        str3.push(str2.charAt(i));
        
    }
    str3.sort();
    for(i=0;i<str3.length;i++){
        str4 = str4.concat(str3[i]);
    }
    return str4;
}
console.log(ordena("a casa do"));
exports.ordena = ordena;
},{}],2:[function(require,module,exports){
const operacao = require("../codigo");


QUnit.test("Ordenacao", function (assert) {

  let resultado = operacao.ordena("casa");
  let resultado2 = operacao.ordena("o joao foi na padaria");
  assert.equal(resultado, "aacs", "ordenacao correta");
  assert.equal(resultado2, "aaaaadfiijnoooopr", "ordenacao correta");
});

},{"../codigo":1}]},{},[2]);
