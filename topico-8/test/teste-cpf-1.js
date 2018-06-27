const operacao = require("../cpf-1");

QUnit.test("CPF 1", function (assert) {

    let resultado = operacao.cpf([0,4,1,2,8,4,2,3,1,9,0]);
    assert.equal(resultado, true, "Resultado incorreto");
});