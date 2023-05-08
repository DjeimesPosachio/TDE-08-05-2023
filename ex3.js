function removerNegativos(array) {
    return array.filter(numero => numero >= 0);
  }

const numeros = [2, -5, 8, -12, 16];

const numerosSemNegativos = removerNegativos(numeros);

console.log(numerosSemNegativos);