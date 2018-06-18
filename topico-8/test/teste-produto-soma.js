const operacao = require("../produto-dois-inteiros-usando-soma");

QUnit.test("Produto de dois inteiros usando soma", function (assert) {

    let resultado = operacao.produto(3,3);
    assert.equal(resultado, 9, "Resultado incorreto");
});