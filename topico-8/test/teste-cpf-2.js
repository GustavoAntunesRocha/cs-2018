const operacao = require("../cpf-2");

QUnit.test("CPF 2", function (assert) {

    let resultado = operacao.cpf2([0,4,1,2,8,4,2,3,1,9,0]);
    assert.equal(resultado, true, "Resultado incorreto");
});