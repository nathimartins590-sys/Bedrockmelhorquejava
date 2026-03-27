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







