var numeroDoComputador = parseInt(Math.random() * 11);

function Chutar() {
  var resultado = document.getElementById("resultado");

  var chute = parseInt(document.getElementById("valor").value);

  if (chute == numeroDoComputador) {
    resultado.innerHTML = "Você acertou";
  } 
   else if (chute > 10 || chute < 0) {
    resultado.innerHTML = "Insira um número de 0 a 10.";
} else {
    resultado.innerHTML = "Você errou. O número secreto era:" + numeroDoComputador;
  } 
  
   }

