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
