# moneyFormat
Formata moeda sem limit de numeros!
de 1000 => 1.000 ou 100000000000000 => 1.000.000.000.000,00
segundo os exeplos abaixo podese passar as formatações
# Exemplo de uso 
alert( moneyFormat(999999999) ); // 9.999.999,99
alert(moneyFormat(999999999,'.',',',2)); // 9.999.999,99
alert(moneyFormat(999999999,',','.',3)); // 999.999,999

# Em input
<input type="text" onkeyup="moneyFormat(this);" placeholder="00,00">