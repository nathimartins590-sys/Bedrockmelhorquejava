
//1
function script(){
const numero = Number(prompt("Digite um numero ou vai reprovar de ano"))
const outronumero = Number(prompt("digite outro numero"))
alert(numero+outronumero)

}
const buttonscript = document.getElementById("script")
buttonscript.addEventListener('click', () => { script() })

//exercio2
function exercicio2() {
   const valorHora = Number(prompt("digite o valor da hora:"))
   const horasTrabalhadas = Number(prompt("digite as horas trabalhadas"))
   const resultado = valorHora*horasTrabalhadas
   alert("Seu salario é: " + resultado) 
}
const buttonexercio2 = document.getElementById("exercio2")
buttonexercio2.addEventListener('click', () => { exercicio2()})

//exercio3
function exercio3(){
    const peso1 = Number(prompt("qual o peso da primeira pessoa?"))
const peso2 = Number(prompt("qual o peso da segunda pessoa?"))
const peso3 = Number(prompt("qual o peso da terceira pessoa?"))
const peso4 = Number(prompt("qual o peso da quarta pessoa?"))
const peso5 = Number(prompt("qual o peso da quinta pessoa?"))

const resultado = (peso1+peso2+peso3+peso4+peso5)/5

alert(`A medida dos pesos informados é"${resultado}`)
}
const buttonexercio3 = document.getElementById("exercio3")
buttonexercio3.addEventListener('click', () => { exercio3()})

//exercio4
function exercio4(){
    const graus = Number(prompt("Coloque uma temperartura"))


const resultado =((9*graus+ 160) /5)

alert ("Fahrenheit" +resultado)
}
const buttonexercio4 = document.getElementById("exercio4")
buttonexercio4.addEventListener('click', () => { exercio4()})

//exercicio5
function exercicio5(){
    const milhas = Number(prompt("Qual a distancia em milhas?"))

const resultado = milhas*1.6934

alert(resultado + "km")
}
const buttonexercicio5 = document.getElementById("exercicio5")
buttonexercicio5.addEventListener('click', () => { exercicio5()})

//exercicio6
function exercicio6(){
    const tempo = Number("por quanto tempo você esquenta seu café?")

const resultado = tempo/3600
const resultado2 = tempo/60
const resultado3 = tempo

alert(resultado + "h")
alert(resultado2 + "m")
alert(resultado3 + "s")
}
const buttonexercicio6 = document.getElementById("exercicio6")
buttonexercicio6.addEventListener('click', () => { exercicio6()})

//exercicio7
function exercicio7(){
    const distancia = Number(prompt("Qual é a distancia em Km?"))

const resultado1 = distancia*1000
const resultado2 = distancia*100000

alert(resultado1 + "m")
alert(resultado2 + "cm")
}
const buttonexercicio7 = document.getElementById("exercicio7")
buttonexercicio7.addEventListener('click', () => { exercicio7()})

//exercicio8
function exercicio8(){
    const número = Number(prompt("Digite qualquer número"))

const resultdo1 = número*1
const resultdo2 = número*2
const resultdo3 = número*3
const resultdo4 = número*4
const resultdo5 = número*5
const resultdo6 = número*6
const resultdo7 = número*7
const resultdo8 = número*8
const resultdo9 = número*9
const resultdo10 = número*10

alert(resultdo1)
alert(resultdo2)
alert(resultdo3)
alert(resultdo4)
alert(resultdo5)
alert(resultdo6)
alert(resultdo7)
alert(resultdo8)
alert(resultdo9)
alert(resultdo10)
}
const buttonexercicio8 = document.getElementById("exercicio8")
buttonexercicio8.addEventListener('click', () => { exercicio8()})
// o carinha de escuta - addEventListner

//atividade9
function exercicio9() {

    const nota1 = Number(prompt("digite sua nota"))
    const nota2 = Number(prompt("digite sua segunda nota"))
    const nota3 = Number(prompt("digite sua teceira nota"))
    
    const media = (nota1+nota2+nota3)/3
    
    if(media == 7) {
         alert("Aprovado")
    } else if (media <7) {
          alert("Reprovado")
     }
} 
const buttonexercicio9 = document.getElementById("exercicio9")
buttonexercicio9.addEventListener('click', () => { exercicio9()})
// atividade 10
function exercicio10() {
    const sexo = prompt("digite seu genero [M-- mulher] ou [H - Hoem]")
    const altura = Number(prompt("digite sua altura"))
    
    // && ||
    if(sexo === 'M') {
        // M = 62,1*altura
        alert("seu peso ideal é")
        resultado = 62.1*altura
        alert(resultado)
    } else if(sexo === 'H') {
        // H = 72,7*altura
        alert("seu peso ideal é") 
        resultado = 72.7*altura
        alert(resultado)
    }
}
const buttonexercicio10 = document.getElementById("exercicio10")
buttonexercicio10.addEventListener('click', () => { exercicio10()})

// atividade 11
function exercicio11() {
    const numero1 = Number(prompt("digite um numero"))
const numero2 = Number(prompt("digite outro numero"))

const resultado = (numero1/numero2)
alert(resultado)
}
const buttonexercicio11 = document.getElementById("exercicio11")
buttonexercicio11.addEventListener('click', () => { exercicio11()})

// atividade 12
function exercicio12() {
    const numero = Number(prompt("digite um numero"))

if(numero <0) {
    alert("seu numero é negativo")
} else if(numero >0) {
    alert("seu numero é positivo")
}
}
const buttonexercicio12 = document.getElementById("exercicio12")
buttonexercicio12.addEventListener('click', () => { exercicio12()})

// atividade 13
function exercicio13() {
    // numero = inteiro
const numero = Number(prompt("digite um numero inteiro"))

const resultado = numero%2
// 0 = par
// 1 = impar

if(resultado == 0) {
    alert("seu numero é par")
} else if(resultado == 1) {
    alert("seu numero é impar")
}
}
const buttonexercicio13 = document.getElementById("exercicio13")
buttonexercicio13.addEventListener('click', () => { exercicio13()})

// atividade 14
function exercicio14() {
    const numero1 = Number(prompt("digite um numero"))
const numero2 = Number(prompt("digite outro numero"))

if (numero1 < numero2) {
    alert("O numero 2 é maior que o numero 1")
} else if (numero2 < numero1) {
    alert("O numero 1 é maior que o numero 2")
}
}
const buttonexercicio14 = document.getElementById("exercicio14")
buttonexercicio14.addEventListener('click', () => { exercicio14()})

// atividade 15
function exercicio15() {
  const CPF = Number(prompt("digite seu CPF"))
const dependente = Number(prompt("digite numero de dependentes"))
const renda = Number(prompt("digite sua renda"))

if(dependente>0.05*1621) {
    alert("voce recebera " + renda* 0.05 * dependente)
}

if(renda<= 2*1621) {
    alert("voce n paga imposto")
} else if(renda<3*1621) {
    alert("voce pagara "+renda* 0.15)
} else if(renda<5*1621) {
    alert("voce pagara "+renda* 0.20)
}  
}
const buttonexercicio15 = document.getElementById("exercicio15")
buttonexercicio15.addEventListener('click', () => { exercicio15()})

// atividade 16
function exercicio16() {
    
}