const operacao = require("../resto");

QUnit.test("Resto", function (assert) {

    let resultado = operacao.resto(5,3);
    let resultado2 = operacao.resto(3,8);
    assert.equal(resultado, 2, "Resultado correto");
    assert.equal(resultado2, 3, "Resultado correto");
});