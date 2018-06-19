const operacao = require("../numero-primo");

QUnit.test("Numero primo", function (assert) {

    let resultado = operacao.primo(3);
    assert.equal(resultado, true, "Resultado incorreto");
});