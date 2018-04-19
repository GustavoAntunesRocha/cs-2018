const operacao = require("../codigo");


QUnit.test("Ordenacao", function (assert) {

  // Executa a operação que desejamos testar
  let resultado = operacao.ordena("casa");

  // Verifica se o resultado produzido é o esperado.
  assert.equal(resultado, "aacs", "ordenacao correta");
});
