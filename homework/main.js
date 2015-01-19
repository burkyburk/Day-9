// 1.Create a function that takes an array of values and returns one randonly selected value from that array.

// function  random(entry) {
// 	var randomNumber = Math.floor(Math.random() * entry.length);
// return  entry[randomNumber];
// }
// 2.Create a function that takes an unencrypted string and returns the ROT-13 version of that string. This is slightly different but similar to the example we did in class.

// function rot13(entry)	{
//     var result = "";
 
//     for(var i = 0; i < entry.length; i++)	{
        
//         var cc = entry[i].charCodeAt(0);
       
//         result += String.fromCharCode(cc+13);
//     }
//     return result;
// }
// console.log(rot13('hello'));
// 3.Create a function that takes a ROT-13 encrypted string and returns the decrypted version of that string.

// function rot13decrypt(entry)	{
// 	var result = "";

// 	for(var i = 0; i < entry.length; i++)	{

// 		var cc = entry[i].charCodeAt(0);

// 		result += String.fromCharCode(cc-13);
// 	}	
// 	return result;
// }
// console.log(rot13decrypt("uryy|"));

// 4.Create a function that takes an unencrypted string and an integer (n) and returns the ROT-N version of that string.
// function rot13n(entry, n)	{
//     var result = "";
//     n = (Math.floor(Math.random * 10);
//     console.log(n)
 
//     for(var i = 0; i < entry.length; i++)	{
        
//         var cc = entry[i].charCodeAt(0);
       
//         result += String.fromCharCode(cc+13);
//     }
//     return result;
// }
// console.log(rot13n('hello', 4));
// 5.Create a javascript function that takes an array of student names and returns an array of randomly selected pairs of students (array of arrays).
// function randomizeArray(arr) {
//   var result = [];

//   while (arr.length > 0) {
//     var i = Math.floor(Math.random() * arr.length);
//     result.push(arr[i]);
//     arr.splice(i, 1);
//   }
//   console.log(result[1], result[2]);
// }




// var arr = ['Jacob', 'Erika', 'Charles', 'Paul', 'Ryan', 'Daniel', 'Alex', 'Travis', 'Gabe', "Hughie"]
// randomizeArray(arr);





// 6.Create a function that takes a string and returns a string with a dash (-) in between each character using .split and .join.



//  	var myArray = ['Jacob', 'Erika', 'Charles', 'Paul', 'Ryan', 'Daniel', 'Alex', 'Travis', 'Gabe', "Hughie"];
//     Dash = myArray.join("-");

// console.log(Dash);



// 7.Create a function that takes a string and returns a string with a dash (-) in between each character without using .split or .join.
	var myString = 'Jacob Erika Charles Paul Ryan Daniel Alex Travis Gabe Hughie';
	var dash = myString.replace(/\s+/g, '-');

console.log(dash);	


// 8.Create a function that takes two string strings and returns a string with a dash (-) in between each character without using .split or .join.
	var myString1 = 'Coffee Beer Wine Milk';
	var myString2 = 'Chocolate Jam Berries Grass';
	var dash = myString1.replace(/\s+/g, '-');
	var dash2 = myString2.replace(/\s+/g, '-');
	var result = dash.concat(dash2);

console.log(result);
// 9.Use $('selector').val() and $('selector').click() to re-create your number guessing game without using window.prompt. Use Bootstrap to build the page.
// 10.Use $('selector').val() and $('selector').click() to re-create your slot machine without using window.prompt. Use Bootstrap to build the page.


