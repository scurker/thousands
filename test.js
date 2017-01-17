'use strict';

var test = require('ava')
  , thousands = require('./');

test('should return empty string', function(t) {
  t.is(thousands(''), '');
  t.is(thousands(undefined), '');
});

test('should allow integers', function(t) {
  t.is(thousands(0), '0');
  t.is(thousands(1), '1');
  t.is(thousands(1234), '1,234');
  t.is(thousands(1234567), '1,234,567');
});

test('should allow negatives', function(t) {
  t.is(thousands(-1), '-1');
  t.is(thousands(-1234), '-1,234');
  t.is(thousands(-1234567), '-1,234,567');
});

test('should allow strings', function(t) {
  t.is(thousands('1'), '1');
  t.is(thousands('1000'), '1,000');
  t.is(thousands('1000000'), '1,000,000');
});

test('should not add commas to existing string', function(t) {
  t.is(thousands('1,000'), '1,000');
  t.is(thousands('1,000,000'), '1,000,000');
  t.is(thousands('1,000.000'), '1,000.000');
});

test('should allow decimals', function(t) {
  t.is(thousands(1.23), '1.23');
  t.is(thousands(1234.56), '1,234.56');
  t.is(thousands(1234567.89), '1,234,567.89');
  t.is(thousands(1234.5678), '1,234.5678');
});

test('should allow custom delimiter', function(t) {
  t.is(thousands(1234, ' '), '1 234');
  t.is(thousands(1234567, ' '), '1 234 567');
});
