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
