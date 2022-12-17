var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}

// ELEVACION
/*
var food;
function eat(){
    var food;
    food = 'half-chicken';
    console.log(food);      // half-chicken
    food = 'gone';
}
food = 'chicken';
console.log(food);          // chicken
eat();
*/