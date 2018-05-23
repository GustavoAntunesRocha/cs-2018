import { DiaDaSemana } from "./diaDaSemana.js";
const diaSemana = new DiaDaSemana();
var dia = parseInt(process.argv[2]);
var mes = parseInt(process.argv[3]);
var ano = parseInt(process.argv[4]);
console.log(process.argv[2]);
console.log(dia,mes,ano);
console.log(diaSemana.dia(dia,mes,ano));