/*Create a `function` that takes in one argument that is passed through a conditional statement. (For example, something like our haunted house `door()` function.) Print some resulting text to the `console`. Test all of your conditions to make sure you can receive all of your results back.*/

function garden(num) {
  if (num === 24) {
    return "rose petal";
  } else if (num === 13) {
    return "sunflower";
  } else {
    return "orchid"
  }
}

console.log(garden(24));
console.log(garden(13));
console.log(garden(37));
