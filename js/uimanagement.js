/**
 * Guess Number game
 * (c) Ferimer, servicios informaticos, 2013 - All rights reserved
 * License: GNU Affero V3 (see LICENSE file)
 * Fernando Rodríguez Sela <fernando@ferimer.es>
 */

var _resultado = document.getElementById('result');
var _min = document.getElementById('min');
var _max = document.getElementById('max');
var _tries = document.getElementById('tries');
var _number = document.getElementById('number');

function updateRange() {
  _min.textContent = guessnumber.getRange().min;
  _max.textContent = guessnumber.getRange().max;
  _tries.textContent = guessnumber.getRange().tries;
  _number.select();
  _number.focus();
}

function newGame() {
  guessnumber.newGame(0,100);
  updateRange();
  _resultado.textContent = "";
}

function guessNumber(number) {
  var result = guessnumber.answer(number);
  updateRange();
  if (result < 0) _resultado.textContent = "Es menor.";
  if (result > 0) _resultado.textContent = "Es mayor.";
  if (result == 0) _resultado.textContent = "¡ Ganaste !";
}

// Events
document.getElementById('newgame').onclick = newGame;
document.getElementById('newnumber').onclick = function() {
  guessNumber(_number.value);
}
window.onload = newGame;
