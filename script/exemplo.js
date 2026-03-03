

const element = document.getElementById('rodape')
//element.style.color = "green"

const novoTitulo = document.createElement("h2")
novoTitulo.textContent = "Eu sempre volto"
element.appendChild(novoTitulo)
//console.log(novoTitulo)

const header = document.getElementById("exemplo")
header.appendChild(novoTitulo)

//const button = document.getElementById('my-button')
//button.addEventListener('click', () => {
 //   alert('button was clicked');
//)}
header.addEventListener("click", () => {
    alert("Willam Afton")
})