const operacao = require("../maior-divisor-comum");

QUnit.test("Maior divisor comum 1", function (assert) {

    let resultado = operacao.mdc(30,28);
    assert.equal(resultado, 2, "Resultado incorreto");
});