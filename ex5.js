function somarNumeros(num1, num2) {
    return new Promise((resolve, reject) => {
      const resultado = num1 + num2;
      if (resultado % 2 === 0) {
        resolve(resultado);
      } else {
        reject('A soma é ímpar');
      }
    });
  }

  somarNumeros(2, 3)
  .then(resultado => console.log(`A soma é ${resultado}`))
  .catch(erro => console.error(erro));