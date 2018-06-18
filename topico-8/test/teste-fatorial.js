const operacao = require("../fatorial");

QUnit.test("Fatorial", function (assert) {

    let resultado = operacao.fatorial(3);
    assert.equal(resultado, 6, "Resultado incorreto");
});