const operacao = require("../potencia-usando-somas");

QUnit.test("Potencia usando soma", function (assert) {

    let resultado = operacao.potencia(2,10);
    assert.equal(resultado, 1024, "Resultado incorreto");
});