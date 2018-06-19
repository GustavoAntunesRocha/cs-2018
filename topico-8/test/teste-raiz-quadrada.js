const operacao = require("../raiz-quadrada");

QUnit.test("Raiz quadrada", function (assert) {

    let resultado = operacao.raiz(9,10);
    assert.equal(resultado, 3, "Resultado incorreto");
});