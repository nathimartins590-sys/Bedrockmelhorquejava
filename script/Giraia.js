
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