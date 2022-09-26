selecioneCidade.onchange = function(){
    let opcao = document.querySelector('.promocoes_opcao')
    let botao = document.querySelector('.promocoes_select')

    opcao.innerHTML = `<button>CONFIRA OS PREÇOS NA SUA CIDADE</button>`
    botao.style.width = '350px'
   

}