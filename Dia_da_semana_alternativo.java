
public class Main {
    public static int dataInteresse;
    public static int anoBissexto;
    public static int dataReferencia;
    public static int diaSemana;
    
    public static int diaInteresse;
    public static int mesInteresse;
    public static int anoInteresse;
    public static void main(String[] args) {
	// TODO Auto-generated method stub
	int i;
	if(args.length < 4) {
	    System.exit(-1);
	}
	for(i=0;i<4;i++) {
	    if(stringToInt(args[i]) < 0) {
		System.exit(-1);
	    }
	    
	}
	dataInteresse = stringToInt(args[0]);
	anoBissexto = stringToInt(args[1]);
	dataReferencia = stringToInt(args[2]);
	diaSemana = stringToInt(args[3]);
	if(diaSemana > 6 || anoBissexto < 1) {
	    System.exit(-1);
	}
	if(!dataValida(dataInteresse) || !dataValida(dataReferencia)) {
	    System.exit(-1);
	}
	if(dataInteresse == dataReferencia) {
	    System.exit(diaSemana);
	}
	anoInteresse = dataInteresse / 10000;
	mesInteresse = (dataInteresse % 10000) /100;
	diaInteresse = dataInteresse % 100;
	if(dataInteresse < dataReferencia) {
	    avancaData();
	}
	if(dataInteresse > dataReferencia){
	    retrocedeData();
	}
	System.exit(diaSemana);
	
    }
    public static void retrocedeData() {
	int anoReferencia = dataReferencia / 10000;
	int mesReferencia = (dataReferencia % 10000) /100;
	int diaReferencia = dataReferencia % 100;
	while(anoInteresse != anoReferencia && mesInteresse != mesReferencia && diaInteresse != diaReferencia) {
	    retrocedeDia();
	    retrocedeDiaSemana();
	}
    }
    public static void retrocedeDia() {
	if(diaInteresse > 1) {
	    diaInteresse--;
	    return;
	}
	if(diaInteresse == 1 && mesInteresse == 3) {
	    if(isBissexto(anoInteresse)) {
		diaInteresse = 29;
		mesInteresse = 2;
		return;
	    }
	    mesInteresse = 2;
	    diaInteresse = 28;
	    return;
	}
	if(diaInteresse == 1) {
	    if(mesInteresse == 4 || mesInteresse == 6 || mesInteresse == 9 || mesInteresse == 11) {
		retrocedeMes();
		diaInteresse = 31;
		return;
	    }
	    else {
		diaInteresse = 30;
		return;
	    }
	}
    }
    public static void retrocedeMes() {
	if(mesInteresse > 1) {
	    mesInteresse --;
	}
	else {
	    mesInteresse = 12;
	    anoInteresse --;
	}
    }
    public static void retrocedeDiaSemana() {
	if(diaSemana > 0) {
	    diaSemana --;
	}
	else {
	    diaSemana = 6;
	}
    }
    public static void avancaData() {
	int anoReferencia = dataReferencia / 10000;
	int mesReferencia = (dataReferencia % 10000) /100;
	int diaReferencia = dataReferencia % 100;
	while(anoInteresse != anoReferencia && mesInteresse != mesReferencia && diaInteresse != diaReferencia) {
	    avancaDia();
	    avancaDiaSemana();
	}
    }
    public static void avancaDiaSemana() {
	if(diaSemana < 6) {
	    diaSemana ++;
	}
	else {
	    diaSemana = 0;
	}
    }
    public static int stringToInt(String texto) {
	try {
	    int a = Integer.parseInt(texto);
	    return a;
	}
	catch (NumberFormatException nfex) {
		return -1;
	}
    }
    public static boolean dataValida(int data) {
	if(Integer.toString(data).length() != 8) {
	    return false;
	}
	int ano = data / 10000;
	int mes = (data % 10000) /100;
	int dia = data % 100;
	
	if(ano < 1000 || mes == 0 || mes > 12 || !validaDia(ano,mes,dia)) {
	    return false;
	}
	return true;
    }
    public static void avancaDia() {
	if(diaInteresse < 30 && mesInteresse != 2) {
	    diaInteresse++;
	    return;
	}
	if(diaInteresse == 28 && mesInteresse == 2) {
	    if(isBissexto(anoInteresse)) {
		diaInteresse = 29;
		return;
	    }
	    mesInteresse = 3;
	    diaInteresse = 1;
	    return;
	}
	if(diaInteresse == 29 && mesInteresse == 2) {
	    avancaMes();
	    diaInteresse = 1;
	    return;
	}
	if(diaInteresse == 31) {
	    avancaMes();
	    diaInteresse = 1;
	    return;
	}
	if(diaInteresse == 30) {
	    if(mesInteresse == 4 || mesInteresse == 6 || mesInteresse == 9 || mesInteresse == 11) {
		avancaMes();
		diaInteresse = 1;
		return;
	    }
	    else {
		diaInteresse = 31;
		return;
	    }
	}
	else {
	    avancaMes();
	    diaInteresse = 1;
	}
    }
    
    public static void avancaMes() {
	if(mesInteresse < 12) {
	    mesInteresse ++;
	    return;
	}
	mesInteresse = 1;
	anoInteresse ++;
    }
    public static boolean validaDia(int ano, int mes, int dia) {
	
	if(dia < 29 && dia != 0) {
	    return true;
	}
	if(dia == 0 || dia > 31) {
	    return false;
	}
	if(mes == 2) {
	    if(isBissexto(ano) && dia <= 29) {
		return true;
	    }
	    if(dia > 28) {
		return false;
	    }
	}
	if(mes == 4 && dia > 30) {
	    return false;
	}
	if(mes == 6 && dia > 30) {
	    return false;
	}
	if(mes == 9 && dia > 30) {
	    return false;
	}
	if(mes == 11 && dia > 30) {
	    return false;
	}
	return true;
    }
    public static boolean isBissexto(int ano) {
	int i;
	if(ano < anoBissexto) {
	    for(i=anoBissexto;i>ano;) {
		i -= 4;
	    }
	    if(i == ano) {
		if(ano % 100 == 0 && ano % 400 != 0) {
		    return false;
		}
		return true;
	    }
	    return false;
	}
	for(i=anoBissexto;i<ano;) {
	    i += 4;
	}
	if(i == ano) {
	    if(ano % 100 == 0 && ano % 400 != 0) {
		return false;
	    }
	    return true;
	}
	return false;
    }

}
