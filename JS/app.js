// legacy variable keyword
var age = 24;
// blocked scoped variable
let name = "michelle";
//const keeps variable the same it doesn't need to be changed
const isStudent = false;
// primitive data types
let tempature=98.6;   //*number       
let greeting="hello"; //*string
let IsLoggedin=false; //*Boolean
let emptyvalue = null; //*null
let notDefined; //*undefined
// basic setup for sending data to html- consol.log
console.log("hey  trey")
console.log(name);
console.log(IsLoggedin);
// arthmetic Operators
let one = 10;
let two = 3;
let sum =one+two;
console.log(sum); //*13
let difference = one-two;
console.log(difference);//*7
let product = one*two;
console.log(product);
let quotient = one/two;
console.log(quotient); //3.3333335
let remainder = one % two;
console.log(remainder) //*1

// increment and decrement
one++ //*11 
// same as  one = one + 1
console.log(one);
one-- 
console.log(one) //*10

// assignment Opperators
let numthree = 5;
numthree = numthree +2;
// same as numthree +=2;
console.log(numthree); //*7
numthree*= 3;
console.log(numthree); //*21
//switch statement
function switchOfStuff(val){
    var answer="";
    switch(val){
        case 1:
            answer = "alpha";
            break;
        case 2 :
            answer = "beta";
            break;
        case 3 :
            answer = "gamma"
        default:
            answer="stuff";
    }
    return answer;
}
console.log(switchOfStuff(1));   //alpha
//card counting
let count = 0;
function cc(card) {
    switch(card){
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++;
            break;
        case 10:
        case 'J':
        case 'Q':
        case 'K':
        case 'A':
            count--;
            break;
    }
    var holdbet = 'hold'
    if (count > 0 ){
        holdbet ='Bet'
    }
    return count + " " + holdbet;
}
cc(2); cc(8); cc(7); cc('K'); cc('A');
console.log(cc(4));

// constructor function
class Person {
    constructor(firstname, lastname, dob) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.dob = dob;
        this.getBirthYear = function () {
            ;
        };
    }
}

//objects dot notation
var Dog = {
    name: "ruff",
    legs:4,
    friends:["ralph", "Joe"]
}
var nameValue = Dog.legs;  //4
//change object
Dog.name = "Rover";
//add property
Dog.sound = "bark";
//or
Dog['sound'] = "woof"
//delete property
delete Dog.sound;
//objects bracket notation -required if name has a spacre in it
var Food = {
    "an entree": "hamburger",
    "a side":"veggies",
    "the drink":"water"
}
var entreeValue = Food["an entree"]; //hamburger

//use variable number object
var object = {
    12: "Montna",
    16: "namath"
}
var playerNumber = 16;
var player = object[playerNumber]; //16

//lookup with object
function lookup(val){

var lookup = {
    "dog":"Rover",
    "cat":"puff",
    "fish": "Nemo"
};
result = lookup[val];
return result;
}
console.log(lookup("dog"));  //Rover
//check for property
function checkObj(checkProp){
    if(lookup.hasOwnProperty(checkProp)){
        return lookup[checkProp];
    }else{
        return "Not Found"
    }
}
console.log(checkObj("horse")) //Not Found

var collection = {
    "2548": {
        "album":"Slippery When Wet",
        "artist": "BonJovi",
        "tracks":[
            "Let it Rock",
            "You Give Love A Bad Name"
        ] 
    },
    "2468": {
        "album":"1999",
        "artist": "Prince",
        "tracks":[
            "1999",
            "Little Red Corvette"
        ]
    },
    "1245": {
        "artist": "Robert Palmer",
        "tracks":[]
    },
    "5439":{
        "album": "ABBA Gold"
    }
   
}
var collectionCopy = JSON.parse(JSON.stringify(collection));

function updateRecords(id, prop, value){
    if (value === ""){
        delete collection[id][prop];
    }else if (prop === "tracks"){
        collection[id][prop] = collection[id][prop] || [];
        collection[id][prop].push(value);
    }else {
        collection[id][prop] = value;
    }
    return collection;
}
updateRecords(2468,"tracks", "test");

console.log(updateRecords(5439, "artist", "ABBA"));   

//iterate even numbers
let myArray = [];
for (let i = 0; i < 10; i+= 2) {
    myArray.push(i);
}
console.log(myArray);
let minusArray = [];

for (let i = 10; i > 0; i-= 2) {
    minusArray.push(i);
}
console.log(minusArray);

let theArray = [ 2, 3, 4, 5, 6];
let total = 0;
for(let i = 0; i < theArray.length; i++){
    total += theArray[i];
}
console.log(total);
//nested for loops
function multiplyAll(arr) {
    let multiply = 1;
    for(let i=0; i < arr.length; i++)
        for(let j = 0; j < arr[i].length; j++){
        multiply *= arr[i][j];
        }
        return multiply;
    }
let multiply = multiplyAll([[1,2], [3,4],[5,6,7,]]);
console.log(multiply);
