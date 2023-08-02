//Atividade 1
//Variável constante que tem 293 Kelvin atribuido, que representa a temperatura do dia.
const Kelvin = 0;
console.log(Kelvin);

//Transformando a unidade de medida de Kelvin para Celsius
let Celsius = Kelvin - 273;
console.log(Celsius);

//Transformando a unidade de medida de Celsius para Fahrenheit
let Fahrenheit = Celsius * (9/5) + 32;

console.log(Fahrenheit);

/*Geralmente quando se converte de Celsius para Fahrenheit,
se obtém um número decimal. 
Por isso utilizei o método .floor(), 
para que caso o número der decimal ele arredondara para baixo.
 */

//(Math.floor(Fahrenheit);

console.log(`A temperatura é ${Math.floor(Fahrenheit)} graus Fahrenheit`)

//Com o valor de Kelvin = 293, o valor em Farenheit vai ser igual a 68.
//Com o valor de Kelvin = 0, o valor em Farenheit vai ser igual a -460.


//Newton
let Newton = Celsius * 33/100
console.log(`A temperatura é ${Math.floor(Newton)} graus Newton`)