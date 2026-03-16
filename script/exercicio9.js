const nota1 = Number(prompt("digite sua nota"))
const nota2 = Number(prompt("digite sua segunda nota"))
const nota3 = Number(prompt("digite sua teceira nota"))

const media = (nota1+nota2+nota3)/3

if(media == 7) {
    alert("Aprovado")
} else if (media <7) {
     alert("Reprovado")
}