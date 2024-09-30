import { letters, words, upperString, titleString, backwardsLetters, backwardsWords, palindrome } from './src/functions.js';

let app = document.querySelector('#app');
let mensaje = document.createElement('p');
mensaje.innerHTML = "Abra la consola";
app.appendChild(mensaje);

let cadena = prompt ("Introduzca una frase");

console.log(letters(prompt(cadena)));
console.log(words(prompt(cadena)));
console.log(upperString(prompt(cadena)));
console.log(titleString(prompt(cadena)));
console.log(backwardsLetters(prompt(cadena)));
console.log(backwardsWords(prompt(cadena)));
console.log(palindrome(cadena));
