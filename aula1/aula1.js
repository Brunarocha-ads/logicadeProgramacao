// comentários
//desafio 1
/*calcular a idade atual
com base no ano de nascimento e no ano atual*/

// variaveis de entrada
//const anoNascimento = 1992;
//const anoAtual = 2024;
//const idade = anoAtual - anoNascimento;

//console.log("você tem atualmente" + idade )
//console.log(´Voce tem atualmente ${idade} anos´)


//desafio2
//conversão de horas para Minutos 
//converta horas em minutos usando operações aritimeticas

//const hora =3;

//const minutos =hora * 60
//console.log(`${hora}horas tem ${minutos}minutos`);

/*desafio3
troca de valores -troque os valores de a e b sem criar variaveis adicionais*/

/*let a=10;
let b=20;

a= a + b;//30
b= a-b; //10
a=a -b; //20

console.log(`variavel A: ${a}`);
console.log(`variavel b: ${b}`);*/

/*let a=10;
let b=20;
let auxiliar =a;

a=b;
b=auxiliar;
console.log(`variavel A: ${a}`);
console.log(`variavel b: ${b}`);*/

/* calculadora de juros simples
A calculadora de juros simples utiliza a formula de juros 
(j=p*i*n), 
onde:
j=juros
p= valor presente, principal(capital);
i=taxa de juros; 0.3= 30%   0.03=3%
n=numeros de periodos (meses)*/

//j=p*i*n

/*const valorCapital = 2000;
const taxaJuros = 0.03 //Igul a 3%
const totalPeriodo =12;

const jurosFinal = valorCapital *taxaJuros * totalPeriodo;

console.log(`juros no periodo de ${totalPeriodo}meses é de ${jurosFinal} reais.`);*/

//condicionais
/*const idade =23

const freteGratis= true;

if(idade >= 18) {
    console.log("você é maior de idade!")
} else if (idade <= 15) {
    console.log ("você é uma criança")
}
//se a idade for maior ou igual a 18 fazer algo, se não se a idade for menor ou igual a 15 quero exibir que é uma criança*/

//

/*const nota=10
 if(nota>= 7) {
    console.log("você foi aprovado")
 } else (nota <= 6) {
    console.log("você foi reprovado")
}

//pratica2*/

/*const produtoValor=1200;
const freteGratis = false;

// if (produtoValor >= 1000 && freteGratis) {
//     console.log ("parabéns você tem o frete gratis nessa compra!")
// } else{
//     console.log("o frete ficou: R$10")
// }

/*
if (produtoValor >= 1000 || freteGratis) {  //or um ou o outro fica verdadeiro
    console.log ("parabéns você tem o frete gratis nessa compra!")
    } else{
     console.log("o frete ficou: R$10")
    }*/


   // condicionais - laços de repetição
   // for > é usado quando vc sabe quantas vezes deseja repetir um bloco de codigo
/*const numero=3;
let valor=10;

for(let i =0; i <= numero; i++) {
    console.log("numero sendo passado" +i)
    valor = valor +5;
}
console.log(valor);*/


//loop_while- (enquanto)repetir o codigo enquanto for verdadeiro

/*let valor =2;
while (valor <5) {
    console.log("valor atual: " + valor)
    valor++;
}
do while - condição é verificada após a execução de codigo

switch- tratamento de casos simplifica a estrutura quando tem muito if - if else... case

operador ternario - ? :   condição : seguido por um ? - se o primeiro for verdadeiro segue para o segundo
pode substituir o if else


funções- é um bloco de código que executa um conjunto de instruções
reutilização de codigos -























































