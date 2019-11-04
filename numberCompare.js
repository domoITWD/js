/*
Create a conditional statement that compares two numbers. You can choose if those numbers will be equal `==`, less than `<`, greater than `>`, less than or equal to `<=`, or greater than or equal to `>=` each other. Include an `if`, `else if`, and `else` statement. Create an `alert()` that gives feedback based on the number. Test your statement with different numbers to make sure all alerts work.
*/

var num = 13;

if (num === 13) {
  console.log('today you will be lucky')
  alert('This number is equal to the one you entered.');
} else if (num < 13) {
  console.log('who knows what today will bring')
  alert('This number is less than the one you entered.');
} else {
  console.log('turn around! there is something behind you.')
  alert('This number is more than the one you entered.');
}
