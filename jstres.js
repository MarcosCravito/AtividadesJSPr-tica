const paragrafo = document.createElement("p")
paragrafo.innerHTML = "A culpa é do Mike"
document.body.appendChild(paragrafo)


function mostrartelefone(){

    document.getElementById("telefone").style.display = "block" 
    document.getElementById("sumirtelefone").style.display = "none" 
}

function sumirtelefone(){
    document.getElementById("telefone").style.display = "none" 
}