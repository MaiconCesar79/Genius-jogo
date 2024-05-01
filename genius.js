const cores = ["vermelho", "azul", "verde", "amarelo"];
let ordem = [];
let clickedOrder = [];
let pontos = 0;

const azul = document.querySelector('.azul'); 
const vermelho = document.querySelector('.vermelho'); 
const verde = document.querySelector('.verde'); 
const amarelo = document.querySelector('.amarelo'); 
const comecar = document.querySelector('.comecar');

function AcenderSequencia() {
    let i = 0;
    ordem.push(cores[Math.floor(Math.random() * 4)]);
    let intervalo = setInterval(function() {
        if (i < ordem.length) {
            let cor = ordem[i];
            let painel = document.querySelector(`.${cor}`);
            painel.style.opacity = '1';
            setTimeout(() => { painel.style.opacity = '0.5';}, 500);
            i++;
        } else {
            clearInterval(intervalo);
        }
    }, 1000); 
}

let click = (color) => {
    clickedOrder.push(color); 
    checkOrdem();
}

let checkOrdem = () => {
    for(let i in clickedOrder) {
        if(clickedOrder[i] !== ordem[i]) {
            gameOver();
            return; // Termina a verificação se houver um erro
        }
    }

    if(clickedOrder.length === ordem.length) {
        pontuacao();
        AcenderSequencia();
    }
}

let pontuacao = () => {
    pontos++;
    clickedOrder = [];
}

verde.onclick = () => click('verde'); 
vermelho.onclick = () => click('vermelho'); 
azul.onclick = () => click('azul'); 
amarelo.onclick = () => click('amarelo'); 

document.addEventListener('DOMContentLoaded', () => {
    comecar.addEventListener('click', () => playGame());
});

let playGame = () => {
    ordem = []; // Reseta a ordem quando o jogo começa
    AcenderSequencia();
}

let gameOver = () => {
    alert(`Você perdeu!!!`);
    pontos = 0;
    ordem = [];
    clickedOrder = [];
}

setInterval(() => {
    document.getElementById("score").innerHTML = `score: ${pontos}`;
}, 100); // Atualiza a pontuação a cada 100ms
