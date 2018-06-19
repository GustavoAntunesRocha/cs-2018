const operacao = require("../quadrado-perfeito");

QUnit.test("Quadrado perfeito", function (assert) {

    let resultado = operacao.quadradoPerfeito(9);
    assert.equal(resultado, true, "Resultado incorreto");
});