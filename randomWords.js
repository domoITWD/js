/* Create an `array` of strings and use `random()` to select random entries and add them to a sentence, printing the result to the console.*/

var array = ['fries', 'milkshake', 'salad', 'BLT'];
var sentence = "I am hungry for a "
var index = Math.floor(Math.random() * array.length);

console.log(sentence + array[index]);
