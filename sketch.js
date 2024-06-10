//variáveis da bolinha
let xBolinha = 350;
let yBolinha = 225;
let diametro = 25;

//velocidade da bolinha
let velocidadeXBolinha = 5;
let velocidadeYBolinha = 5;
let raio = diametro /2;

//variáveis da raquete
let xRaquete = 5;
let yRaquete = 160;
let raqueteComprimento = 10;
let raqueteAltura = 75;


//variáveis do oponente
let xRaqueteOponente = 635;
let yRaqueteOponente = 150;
let velocidadeYOponente;

let colidiu = false;

//variáveis divisao do campo
let xLinha = 325;
let yLinha = 0;
let comprimentoLinha = 5;
let alturaLinha = 500;

//variável pontos
let meusPontos = 0;
let pontosDoOponente = 0;

function setup() {
  createCanvas(650, 400);
}

function draw() {
  background(0);
  divisaoDeCampo();
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBorda();
  mostraRaquete(xRaquete, yRaquete);
  mostraRaquete(xRaqueteOponente, yRaqueteOponente);
  movimentaMinhaRaquete();
  movimentaRaqueteOponente();
 // verificaColisaoRaquete();
  verificaColisaoRaquete(xRaquete, yRaquete);
  verificaColisaoRaquete(xRaqueteOponente, yRaqueteOponente);
  incluiPlacar();
  marcaPonto();
}

function mostraBolinha() {
  circle(xBolinha,yBolinha,diametro);
}

function movimentaBolinha(){
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function verificaColisaoBorda(){
  if (xBolinha + raio > width || 
      xBolinha - raio < 0){
  velocidadeXBolinha *= -1;
}

  if (yBolinha + raio > height ||
      yBolinha - raio < 0 ){
  velocidadeYBolinha *= -1; 
}
}
  
function mostraRaquete(x,y){
  rect(x, y, raqueteComprimento,
       raqueteAltura);
}
  
function movimentaMinhaRaquete(){
  if (keyIsDown(UP_ARROW)){
  yRaquete -= 15;   
}
  if (keyIsDown(DOWN_ARROW)){
    yRaquete += 15;
}
}

function verificaColisaoRaquete(){
  if (xBolinha - raio < xRaquete + raqueteComprimento 
&& yBolinha - raio < yRaquete + raqueteAltura && yBolinha + raio > yRaquete)  {velocidadeXBolinha *= -1;
  }
}
  
function divisaoDeCampo(){
  rect(xLinha, yLinha, comprimentoLinha, alturaLinha);
}

function   verificaColisaoRaquete(x, y){
  colidiu = collideRectCircle(x, y, raqueteComprimento, raqueteAltura, xBolinha, yBolinha, raio);
  if (colidiu){
    velocidadeXBolinha *= -1;
  }
}

function  movimentaRaqueteOponente(){
    velocidadeYOponente = yBolinha -yRaqueteOponente -raqueteComprimento / 2 -30;
    yRaqueteOponente += velocidadeYOponente
}

function incluiPlacar(){
  textAlign();
  textSize(16);
  fill(color(255,140,0));
  rect(150, 10, 40, 20);
  fill(255);
  text(meusPontos, 165, 26);
  fill(color(255,140,0));
  rect(450, 10, 40, 20);
  fill(255);  
  text(pontosDoOponente, 465, 26);
}

function marcaPonto(){
  if (xBolinha > 635){
     meusPontos += 1;
  }
  if (xBolinha < 15){
     pontosDoOponente += 1;
  }
}
