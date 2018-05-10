(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/** @namespace */
var DiaDaSemana = exports.DiaDaSemana = function () {
    function DiaDaSemana() {
        _classCallCheck(this, DiaDaSemana);
    }

    _createClass(DiaDaSemana, [{
        key: "dia",

        /**
         * Um algoritmo que define o dia da semana para uma determinada data de Kim Larsen
         * @param {number} d Dia
         * @param {number} m Mes
         * @param {number} a Ano
         * 
         * @returns {number} O dia da semana, 0 para segunda, 1 para terça, e assim por diante
         */
        value: function dia(d, m, a) {
            if (d >= 1 || d <= 31, m >= 1 || m <= 12, a > 1753) {
                if (m == 1 || m == 2) {
                    m += 12;
                    a -= 1;
                }
                var s = d + 2 * m + 3 * (m + 1) / 5 + a + a / 4 - a / 100 + a / 400;
                return Math.trunc(s % 7);
            }
        }
    }]);

    return DiaDaSemana;
}();

},{}],2:[function(require,module,exports){
'use strict';

var _diaDaSemana = require('../diaDaSemana');

var diaSemana = new _diaDaSemana.DiaDaSemana();
QUnit.test('Dia da Semana', function (assert) {

  // Executa a operação que desejamos testar
  var resultado = diaSemana.dia(9, 5, 2018);

  // Verifica se o resultado produzido é o esperado.
  assert.equal(resultado, 2, 'resultado incorreto');
});

},{"../diaDaSemana":1}]},{},[2]);
