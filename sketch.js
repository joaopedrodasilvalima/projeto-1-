let campoIdade;

function setup() {
  createCanvas(400, 400);
  campoIdade = createInput("10");
}

function draw() {
  background(220);
  let idade = campoIdade.value();
  let recomendacao = geraRecomendacao(idade);
  text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade) {
  if(idade >= 12) {
    if(idade >= 18) {
      return "one piece";
    } else {
      return "naruto";
    }
  } else {
    return "dragon ball";
  }
}