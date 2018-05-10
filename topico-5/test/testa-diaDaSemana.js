import { DiaDaSemanama } from "../diaDaSemana;
const dia = new DiaDaSemanama();
QUnit.test('Dia da Semana', function (assert) {

    // Executa a operação que desejamos testar
    let resultado = dia.diaDaSemana(9,5,2018);
  
    // Verifica se o resultado produzido é o esperado.
    assert.equal(resultado, 2, 'resultado incorreto');
  });