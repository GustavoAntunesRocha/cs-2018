const operacao = require("../codigo");


QUnit.test("Ordenacao", function (assert) {

  let resultado = operacao.ordena("casa");
  let resultado2 = operacao.ordena("o joao foi na padaria");
  assert.equal(resultado, "aacs", "ordenacao correta");
  assert.equal(resultado2, "aaaaadfiijnoooopr", "ordenacao correta");
});
