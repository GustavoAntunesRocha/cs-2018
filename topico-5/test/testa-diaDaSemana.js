import { DiaDaSemana } from "../diaDaSemana";
const diaSemana = new DiaDaSemana();
QUnit.test('Dia da Semana', function (assert) {

    // Executa a operação que desejamos testar
    let resultado = diaSemana.dia(9,5,2018);
  
    // Verifica se o resultado produzido é o esperado.
    assert.equal(resultado, 2, 'resultado incorreto');
  });