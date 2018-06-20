const operacao = require("../crivo-erastotenes");

QUnit.test("Crivo de Erastotenes", function (assert) {

    let resultado = operacao.crivoErastotenes(73);
    assert.equal(resultado, true, "Resultado incorreto");
});