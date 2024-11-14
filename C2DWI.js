//Funcao original
const numerosOriginal = [];
const geracoesOriginal = [];
function gerarAleatoriosOriginal(){
    while(numerosOriginal.length < 6){
        var aleatorio = Math.floor(Math.random()*60+1);
        geracoesOriginal.push(aleatorio)
        if(numerosOriginal.includes(aleatorio)){
            continue;
        }{
            numerosOriginal.push(aleatorio);
        }
    }
}

// O código otimizado melhora significativamente o desempenho em relação ao código original ao substituir a verificação de duplicatas includes() O(n) por um vetor auxiliar (Uint8Array) que realiza verificações e marcações em O(1). Isso elimina buscas lineares, especialmente à medida que o array cresce.

const numerosOtimizado = [];
const geracoesOtimizado = [];

function gerarNumerosOtimizado() {
  const usados = new Uint8Array(61); // Vetor auxiliar para rastrear números já usados

  while (numerosOtimizado.length < 6) {
    const aleatorio = Math.floor(Math.random() * 60 + 1);
    geracoesOtimizado.push(aleatorio);

    // Verifica diretamente se o número já foi usado
    if (usados[aleatorio]) {
      continue;
    }

    // Marca o número como usado e o adiciona ao resultado
    usados[aleatorio] = 1;
    numerosOtimizado.push(aleatorio);
  }
}


console.time("Original");
gerarAleatoriosOriginal();
console.timeEnd("Original");

console.log("Gerações: " + numerosOriginal.length, numerosOriginal);
console.log("Números: " + numerosOriginal.length, numerosOriginal);

console.time("Otimizado");
gerarNumerosOtimizado();
console.timeEnd("Otimizado");
console.log("Gerações: " + geracoesOtimizado.length, geracoesOtimizado);
console.log("Números: " + numerosOtimizado.length, numerosOtimizado);
