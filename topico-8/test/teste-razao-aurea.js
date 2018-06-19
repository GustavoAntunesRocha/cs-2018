const operacao = require("../razao-aurea");

QUnit.test("Razao aurea", function (assert) {

    let resultado = operacao.razaoAurea(1,2,200);
    assert.equal(resultado, 1.618033988749895, "Resultado incorreto");
});