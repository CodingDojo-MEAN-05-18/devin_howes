// 1
// GIVEN
// console.log(hello);
// var hello = 'world';
// AFTER HOISTING
// var hello
// console.log(hello); // logs undefined
// hello = 'world';


//2
//GIVEN
// var needle = 'haystack';
// test();

// function test() {
//     var needle = 'magnet';
//     console.log(needle);
// }
// AFTER HOISTING
// var needle;
// function test() {
//     var needle;
//     needle = 'magnet';
//     console.log(needle)
// }
// needle = 'haystack';
// test(); logs magnet


// 3
// GIVEN
// var brendan = 'super cool';

// function print() {
//     brendan = 'only okay';
//     console.log(brendan);
// }
// console.log(brendan);
// AFTER HOISTING
// var bendan
// function print() {
//     brendan = 'only okay';
//     console.log(brendan);
// }
// brendan = 'super cool';
// console.log(brendan); // logs super cool


//4
//GIVEN
// var food = 'chicken';
// console.log(food);
// eat();
// function eat() {
//     food = 'half-chicken';
//     console.log(food);
//     var food = 'gone';
// }
// AFTER HOISTING
// var food;
// function eat() {
//     var food;
//     food = 'half-chicken';
//     console.log(food);
//     food = 'gone';
// }
// food = chicken;
// console.log(food); // logs chicken
// eat (); // logs half-chicken


//5
//GIVEN
// mean();
// console.log(food);
// var mean = function () {
//     food = "chicken";
//     console.log(food);
//     var food = "fish";
//     console.log(food);
// }
// console.log(food);
// AFTER HOISTING
// var mean; // logs error
// mean(); 
// console.log(food);
// function mean() {
//     var food;
//     food = "chicken";
//     console.log(food);
//     food = "fish";
//     console.log(food);
// }
// console.log(food);


//6
// GIVEN
// console.log(genre);
// var genre = "disco";
// rewind();

// function rewind() {
//     genre = "rock";
//     console.log(genre);
//     var genre = "r&b";
//     console.log(genre);
// }
// console.log(genre);
// AFTER HOISTING
// var genre;
// function rewind() {
//     var genre;
//     genre = "rock";
//     console.log(genre);
//     genre = "r&b";
//     console.log(genre);
// }
// console.log(genre); // logs undefined
// genre = "disco";
// rewind(); // logs rock, r&B
// console.log(genre); // logs disco


// 7
// GIVEN
// dojo = "san jose";
// console.log(dojo);
// learn();

// function learn() {
//     dojo = "seattle";
//     console.log(dojo);
//     var dojo = "burbank";
//     console.log(dojo);
// }
// console.log(dojo);
// AFTER HOISTING
// function learn() {
//     var dojo;
//     dojo = "seattle";
//     console.log(dojo);
//     dojo = "burbank";
//     console.log(dojo);
// }
// dojo = "san jose";
// console.log(dojo); // logs san jose
// learn(); // logs seattle, burbank
// console.log(dojo); // logs san jose


//8
//GIVEN
// console.log(makeDojo("Chicago", 65));
// console.log(makeDojo("Berkeley", 0));

// function makeDojo(name, students) {    
//     const dojo = {};    
//     dojo.name = name;    
//     dojo.students = students;    
//     if (dojo.students > 50) {    
//         dojo.hiring = true;    
//     }    
//     else if (dojo.students <= 0) {    
//         dojo = "closed for now";    
//     }    
//     return dojo;
// }
// AFTER HOISTING
// function makeDojo(name, students) {    
//     const dojo = {};    
//     dojo.name = name;    
//     dojo.students = students;    
//     if (dojo.students > 50) {    
//         dojo.hiring = true;    
//     }    
//     else if (dojo.students <= 0) {    
//         dojo = "closed for now";    
//     }    
//     return dojo;
// }
// console.log(makeDojo("Chicago", 65)); // {name: 'chicago', students: 65, hiring: true}
// console.log(makeDojo("Berkeley", 0)); // error