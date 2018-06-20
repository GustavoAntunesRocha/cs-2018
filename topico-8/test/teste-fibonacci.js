const operacao = require("../fibonacci");

QUnit.test("Fibonacci", function (assert) {

    let resultado = operacao.fibonacci(10);
    assert.equal(resultado, 55, "Resultado incorreto");
});