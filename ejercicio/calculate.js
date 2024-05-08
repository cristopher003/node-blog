const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Función para calcular el puntaje total
function calculateScore(numbers) {
  let score = 0;

  numbers.forEach(number => {
    if (number === 5) {
      score += 5;
    } else if (number % 2 === 0) {
      score += 1;
    } else if (number % 2 !== 0 && number !== 5) {
      score += 3;
    }
  });

  return score;
}

function main() {
  rl.question('Ingrese un arreglo de números separados por comas: ', input => {
    const numbers = input.split(',').map(num => parseInt(num.trim()));
    const score = calculateScore(numbers);
    console.log('El puntaje total es:', score);
    rl.close();
  });
}


main();