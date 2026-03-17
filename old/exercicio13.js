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