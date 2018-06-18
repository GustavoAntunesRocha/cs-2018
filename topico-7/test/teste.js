const operacao = require("../NumerosNaturais");

QUnit.test("Soma n numeros naturais", function (assert) {

    let resultado = operacao.somaNaturais(3);
    let resultado2 = operacao.somaNaturais(4);
    assert.equal(resultado, 6, "Resultado 1 incorreto");
    assert.equal(resultado2, 10, "Resultado 2 incorreto");
});