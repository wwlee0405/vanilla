function sayHello(name, age) {
  return `Hello ${name} you are ${age} years old.`;
}

const greetingNicolas = sayHello("Nicolas", 14);

console.log(greetingNicolas);

const a = 5;
const b = 5;
const calculator = {
  plus: function(a, b) {
    return a + b;
  },
  minus: function(a, b) {
    return a - b;
  },
  multiply : function(a,b){
    return a*b;
  },
  divide : function(a,b){
    return a/b;
  },
  squared : function(a,b) {
    return a**b;
  },
  remainder: function(a, b){
    return a % b;
  }
};

const plus = calculator.plus(a, b);
const minus = calculator.minus(a, b);
const multiply = calculator.multiply(a, b);
const divide = calculator.divide(a, b);
const squared = calculator.squared(a, b);
const remainder = calculator.remainder(a, b);
console.log(`${plus}\n${minus}\n${multiply}\n${divide}\n${squared}\n${remainder}`);
