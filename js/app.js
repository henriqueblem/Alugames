
//Resgatando os elementos no HTML
let jogosAlugados = 0;

function alterarStatus (id) {
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');
    


    //lógica
    if (imagem.classList.contains('dashboard__item__img--rented')) {
        alert('Deseja mesmo devolver este jogo?');
        imagem.classList.remove('dashboard__item__img--rented');
        botao.textContent = 'Alugar';
        botao.classList.remove('dashboard__item__button--return');
    } else {
        imagem.classList.add('dashboard__item__img--rented');
        botao.textContent = 'Devolver';
        botao.classList.add('dashboard__item__button--return');
        contadorDeAlugados();
    }
}

function contadorDeAlugados() {
    jogosAlugados++;
    console.log(`Um total de ${jogosAlugados} foram alugados`);
}