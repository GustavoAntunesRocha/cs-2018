const operacao = require("../valor-pi");

QUnit.test("Valor de PI", function (assert) {

    let resultado = operacao.pi(20000);
    resultado = resultado.toFixed(2);
    assert.equal(resultado, "3.14", "Resultado incorreto");
});