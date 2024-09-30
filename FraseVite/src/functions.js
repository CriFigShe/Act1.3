'use strict'

function letters(cadena) {
  return cadena.length;
}

function words(cadena) {
  return cadena.split(" ").length;
}

function upperString(cadena) {
  return cadena.toLocaleUpperCase();
}

function titleString(cadena) {
  return cadena
    .split(" ")
    .map((palabra) => palabra.charAt(0).toLocaleUpperCase() + palabra.slice(1))
    .join(" ");
}

function backwardsLetters(cadena) {
  return cadena.split("").reverse().join("");
}

function backwardsWords(cadena) {
  return cadena.split(" ").reverse().join(" ");
}

function palindrome(cadena) {
  let procesada = cadena.toLowerCase().replace(/\s+/g, "");
  return procesada === procesada.split("").reverse().join("");
}

export {
  letters,
  words,
  upperString,
  titleString,
  backwardsLetters,
  backwardsWords,
  palindrome
}
