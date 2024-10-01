function criaCartao(categoria, pergunta, resposta) {
    let container = document.getElementById('container')
    let cartao = documente.createElement('article')
    cartao.className = 'cartao'

    cartao.innerHTML = `
    <div class="cartao__conteudo">
        <h3>${categoria}</h3>
        <div class="catao__conteudo__pergunta">
            <p>${pergunta}</p>
        </div>
        
}