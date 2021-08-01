let order = [];
let clickedOrder = [];
let score  = 0;

//0 = verde
//1 = vermelho
//2 = amarelo
//3 = azul
const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');
//cria ordem aleatória
let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.randon() * 4);
    order[order.length] = colorOrder;
    clickedOrder = [];

    for(let i in order){
        let elementColor = createcolorElement(orde[i]);
        lightColor(elementColor, Number(i) +1);
    }
}
//acende a próxima cor
let lightColor = (element, number) => {
   number = number * 500;
setTimeout(() => {
    element.classList.add('selected');
}, number - 250);
setTimeout(() => {
    element.classList.remove('selected');
});
}

//Verifica se os botões clicados são da mesma ordem
let checkOrder = () => {
    for(let i in clickedOrder){
        if(clickedOrder[i] != order[i]){
          gameOver();
          break;
        }
    }
    if (clickedOrder.lenght == order.length){
        alert('Pontuação: ${score}\nVocê acertou! Iniciando o próximo nível!!');
        nextLevel();
    }
}
//função para o clique usuário.
let click = (color) => {
  clickedOrder[clickedOrder.length] = color;
    createColorElementent(color).classList.add('selected');

  setTimeout(() => {
    createColorElement(color).classList.remove('selected');
    checkOrder();
  },250);
 
}

//criar a função que retorna a cor
let createColorElement = (color) => {
    if(color == 0){
        return green;
    } else if(color == 1){
      return red;
    } else if (color == 2){
      return yellow;
    }else if (color == 3){
      return blue;
    }
}

//função para proximo nivel do jogo.
let nextLevel = () => {
  score++;
  shuffleOrder();
}

//Função para game over
let gameOver = () => {
    alert('pontuação; ${score}!\nVocê Perdeu o jogo! Clique em  OK para iniciar um novo jogo');
    order = [];
    clickedOrder = [];

    playGame();
}
//função do início do game
let playGame = () => {
    alert('Bem vindo ao Genius Memory! iniciando Jogo');
    score = 0;

    nextlevel();
}
//Evento de click
green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);

//iniciando o Game
playGame();
