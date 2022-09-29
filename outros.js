onchange = function(){
    document.querySelector('.promocoes_opcao')
    document.querySelector('.promocoes_select').classList.toggle("esconder")
    document.querySelector('.botao_verificarPrecos').classList.toggle("mostrar")

}

function mostraPrecos(){
    document.querySelector('.precos_container').classList.toggle("mostrar")
}