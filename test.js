const prompt = require(`prompt-sync`)();
const num = parseInt(prompt(`Indica un número: `));

num2 = Math.floor(Math.random()*100)+1;
    console.log(num2);

if (num === num2) {
    console.log (`Felicidades, adivinaste el número secreto`)
} 
else {
    console.log (`Ups, el número secreto es incorrecto, vuelve a intentarlo.`)
}