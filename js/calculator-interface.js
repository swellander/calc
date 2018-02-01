var Calculator = require('calculator.js').calculatorModule;


$(document).ready(function() {
  $('#calculator-form').submit(function(event) {
    event.preventDefault();
    var a = $('#a').val();
    var b = $('#b').val();
    var operation = $('#operation').val();
    var calculator = new Calculator;
    var result = Calculator[operation](a, b);

    $('.result').append('<p>' + result + '</p>');
  })
})
