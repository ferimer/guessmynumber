/**
 * Guess Number game
 * (c) Ferimer, servicios informaticos, 2013 - All rights reserved
 * License: GNU Affero V3 (see LICENSE file)
 * Fernando Rodríguez Sela <fernando@ferimer.es>
 */

var guessnumber = (function guessnumber() {
  var min = 0,
      max = 10,
      tries = 0,
      number = 0;

  return {
    newGame: function(_min, _max) {
      min = _min;
      max = _max;
      number = Number.toInteger( (Math.random() * (max * 10)) % max );
      tries = 0;
    },

    answer: function(_number) {
      tries++;
      if (number == _number) {
        return 0;
      }
      if (_number > number) {
        if (_number < max) {
          max = _number;
        }
        return -1;
      } else {
        if (_number > min) {
          min = _number;
        }
        return 1;
      }
    },

    getRange: function() {
      return {
        min: min,
        max: max,
        tries: tries
      }
    }
  }
})();
