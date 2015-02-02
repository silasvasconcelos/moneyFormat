// Formata moeda sem limit de numeros!
// de 1000 => 1.000 ou 100000000000000 => 1.000.000.000.000,00
// segundo os exeplos abaixo podese passar as formatações
// ##################### Exemplo de uso ######################
// alert( moneyFormat(999999999) ); // 9.999.999,99
// alert(moneyFormat(999999999,'.',',',2)); // 9.999.999,99
// alert(moneyFormat(999999999,',','.',3)); // 999.999,999
function moneyFormat(val, symbA, symbB, nums) {
    console.log( val );
    if ( typeof(val) == 'undefined') { return false };
    if ( typeof(symbA) == 'undefined') { symbA = '.'; };
    if ( typeof(symbB) == 'undefined') { symbB = ','; };
    if ( typeof(nums) == 'undefined') { nums = 2; };
    // Pega o valor passado e remove o que não for numero depois inverte a ordem dos numeros
    var money = val.toString().replace(/\D+/,'').split("").reverse().join(""),
        moneyFormated = [], // Define um array limpo
        decimalPlaces = 3, 
        runing = 0,
        val= '';
    // Loop que só termina quando não houver mais numeros
    while(true){
        // Primeira interação do loop, pega as duas casas de moeda e coloca o symbA
        if (runing == 0) {
            val = money.substr(0,nums)+symbB;
            runing = 1;
        // Segunda interação do loop, pega os 3 primeiros valores mas não coloca o symbB passado
        } else if ( runing == 1 ) {
            val = money.substr(nums,decimalPlaces);
            runing = 2;
        // Terceira interação do loop, aqui já coloca o symbB de 3 em 3 valores
        } else {
            nums=nums+3
            val = symbA+money.substr(nums,decimalPlaces);
        };
        // Verifica se ainda tem valores a serem tratados, se não finaliza o loop
        if ( val.replace(/\D/,'').length == 0 ) {
            break;
        };
        // Adicionar cada valor a um array JS
        moneyFormated.push(val);
    }
    // Coverte o array para string explode cada numero da um 
    // reverse e depois um join para montar a string de numeros formatada retornando a mesma.
    return moneyFormated.join("").split("").reverse().join("");

}
