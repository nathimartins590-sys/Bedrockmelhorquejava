const nota1 = Number(prompt("Digite a primeira nota"))
const nota2 = Number(prompt("Digite a segunda nota"))
const nota3 = Number(prompt("Digite a terceira nota"))

const media = (nota1+nota2+nota3)/3
console.log(media) 
// ele está no f12 na aba console

if (media <3) {          
    alert("um coala tem mais QI do que voce")
} else if(media >= 3 && media < 7) {
    alert("voce era amigo do coala")
} else if(media <= 10) {
    alert("voce é o professor do Albert Einstein")
} else {
    alert("essa nota não existe")
}
