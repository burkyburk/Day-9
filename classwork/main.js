var arrayElement = true;
var myArray = [123, "hello world!", arrayElement];
var anotherArray =[1,2,3,4];


console.log(myArray);
var finalArray = myArray.concat('a', 'b', 'c', anotherArray);

var aIndex = finalArray.indexOf('a'); //searches for first index of value in array


var newArray = ['a', 'r', 'f', 'we'];

console.log(newArray);

console.log(newArray.join('string'));


var mysteryValue = finalArray.pop();
console.log(mysteryValue);
conole.log(finalArray);


function greet(name) {
return 'Hi '+name;
}