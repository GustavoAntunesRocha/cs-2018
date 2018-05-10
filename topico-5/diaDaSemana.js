/** @namespace */
export class DiaDaSemana{
    /**
     * Um algoritmo que define o dia da semana para uma determinada data de Kim Larsen
     * @param {number} d Dia
     * @param {number} m Mes
     * @param {number} a Ano
     * 
     * @returns {number} O dia da semana, 0 para segunda, 1 para terça, e assim por diante
     */
    dia(d,m,a){
        if(d>=1 || d<=31, m>=1 || m<=12, a>1753){
            if(m==1 || m==2){
                m += 12;
                a -= 1;
            }
            var s = d + 2*m + 3*(m+1) / 5 + a + a/4 - a/100 + a/400;
            return Math.trunc(s % 7);
        } 
    }
}