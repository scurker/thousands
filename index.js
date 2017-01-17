'use strict';

module.exports = function thousands(number, separator) {
  var parts = ((number || number === 0 ? number : '') + '').split('.');

  if(parts.length) {
    parts[0] = parts[0].replace(/(\d)(?=(\d{3})+\b)/g, '$1' + (separator || ','))
  }

  return parts.join('.');
};
