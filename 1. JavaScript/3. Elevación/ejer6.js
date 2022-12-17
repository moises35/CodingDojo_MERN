console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);

// ELEVACION
/* 
var genre;
function rewind() {
    var genre;
    genre = "rock";
    console.log(genre);     // rock
    genre = "r&b";
    console.log(genre);     // r&b
}
console.log(genre);     // undefined
genre = "disco";
rewind();
console.log(genre);     // disco
*/