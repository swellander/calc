(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var Calculator = require('./../js/calculator.js').calculatorModule;

$(document).ready(function() {

  $('#calculator-form').submit(function(event) {


    event.preventDefault();
    var a = $('#a').val();
    var b = $('#b').val();
    var operation = $('#operation').val();

    var calculator = new Calculator('blue');
    console.log(operation);
    var result = calculator[operation](a, b);

    $('#solution').append('<p>' + result + '</p>');

  })
})

},{"./../js/calculator.js":2}],2:[function(require,module,exports){
function Calculator(skin) {
  this.skin = skin;
};

Calculator.prototype.add =  function(a, b) {
  a = Number(a);
  b = Number(b);
  return a + b;
}
Calculator.prototype.subtract = function (a, b) {
  a = Number(a);
  b = Number(b);
  return a - b;
}

Calculator.prototype.divide = function (a, b) {
  a = Number(a);
  b = Number(b);
  return a / b;
}

Calculator.prototype.multiply = function(a, b) {
  a = Number(a);
  b = Number(b);
  return a * b;
}


exports.calculatorModule = Calculator;

},{}]},{},[1]);
