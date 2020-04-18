// Variáveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 15;
let raio = diametro/2;

// Movimentação da bolinha
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;

// Variáveis da raquete do jogador
let xRaquete = 5;
let yRaquete = 155;
let cRaquete = 10;
let aRaquete = 90;

// Variáveis da raquete do oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 155;
let velocidadeYOponente;

// Biblioteca p5.collide2d
let colidiu = false;

// Placar do jogo
let pontosJogador = 0;
let pontosOponente = 0;

// Sons do jogo
let raquetada;
let ponto;
let trilha;

// Inteligencia IA
let chanceDeErrar;

function preload(){
  trilha = loadSound("trilha.mp3");
  ponto = loadSound("ponto.mp3");
  raquetada = loadSound("raquetada.mp3");
}

function setup() {
  createCanvas(600, 400);
  trilha.loop();
}

function draw() {
  background(0);
  mostraBolinha();
  movimentaBolinha();
  mostrarRaquete(xRaquete, yRaquete);
  movimentaARaqueteDoJogador();
  //colisaoRaquete();
  colisaoRaqueteBiblioteca(xRaquete, yRaquete);
  colisaoRaqueteBiblioteca(xRaqueteOponente, yRaqueteOponente);
  mostrarRaquete(xRaqueteOponente, yRaqueteOponente);
  movimentaRaqueteOponente();
  mostraPlacar();
  marcaPonto();
  calculaChanceDeErrar();
  
  if(xBolinha + raio > width || xBolinha - raio < 0){
    velocidadeXBolinha *= -1;
  }
  
  if(yBolinha + raio > height || yBolinha - raio < 0){
    velocidadeYBolinha *= -1;
  }
  
}

function mostraBolinha(){
  circle(xBolinha, yBolinha, diametro);
}

function movimentaBolinha(){
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function mostrarRaquete(x, y){
  rect(x, y, cRaquete, aRaquete);
}

function movimentaARaqueteDoJogador(){
  if (keyIsDown(UP_ARROW)){
    yRaquete -= 10;
  }
  if (keyIsDown(DOWN_ARROW)){
    yRaquete += 10;
  }
}

function colisaoRaquete(){
  if (xBolinha - raio < xRaquete + cRaquete && yBolinha - raio < yRaquete + aRaquete && yBolinha + raio > yRaquete){
    velocidadeXBolinha *= -1;
    
    raquetada.play();
  }
}

function colisaoRaqueteBiblioteca(x, y){
  colidiu =
  collideRectCircle(x, y, cRaquete, aRaquete, xBolinha, yBolinha, raio);
  if (colidiu){
      velocidadeXBolinha *= -1;
    
      raquetada.play();
      }
}

function movimentaRaqueteOponente(){
  velocidadeYOponente = yBolinha -yRaqueteOponente - cRaquete / 2 - 30;
  yRaqueteOponente += velocidadeYOponente + 40//chanceDeErrar;
  //calculaChanceDeErrar()
}

function mostraPlacar(){
  stroke(255);
  textAlign(CENTER);
  textSize(16);
  fill(color(255, 140, 0));
  rect(150, 10, 40, 20);
  fill(255);
  text(pontosJogador, 170, 26);
  fill(color(255, 140, 0));
  rect(450, 10, 40, 20);
  fill(255);
  text(pontosOponente, 470, 26);
}

function marcaPonto(){
  if (xBolinha > 590){
    pontosJogador += 1;
    ponto.play();
  }
  if (xBolinha < 10){
    pontosOponente += 1;
    ponto.play();
  }
}

function calculaChanceDeErrar() {
  if (pontosOponente >= pontosJogador) {
    chanceDeErrar += 1
    if (chanceDeErrar >= 39){
    chanceDeErrar = 40
    }
  } else {
    chanceDeErrar -= 1
    if (chanceDeErrar <= 35){
    chanceDeErrar = 35
    }
  }
}

