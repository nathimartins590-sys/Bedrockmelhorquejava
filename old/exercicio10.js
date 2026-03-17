
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