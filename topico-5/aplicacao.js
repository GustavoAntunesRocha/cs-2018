import { DiaDaSemana } from "diaDaSemana";
const diaSemana = new DiaDaSemana();
const dia = parseInt(process.argv[2]);
const mes = parseInt(process.argv[3]);
const ano = parseInt(process.argv[4]);
console.log(diaSemana.dia(dia,mes,ano));