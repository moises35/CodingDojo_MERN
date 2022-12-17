mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);

// ELEVACION
/*
var mean;
mean();    // TypeError: mean is not a function
console.log(food);      // undefined
mean = function() {
    var food;
    food = "chicken";
    console.log(food);      // chicken
    food = "fish";
    console.log(food);      // fish
}
console.log(food);    // undefined
*/