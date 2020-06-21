
//1. Write a program that takes a positive integer from user & display the following in your browser. 
// a. number 
// b. round off value of the number 
// c. floor value of the number
// d. ceil value of the number
// Question 1. Write a program that takes a positive integer from user & display the following in your browser. 

// a. number
// var a =  3.45214 ;
// document.write("number :" + a);

// b. round off value of the number
// var a = Math.round(3.45214) ;
// document.write("round off value :" +a);

// c. floor value of the number 
// var a = Math.floor(3.45214) ;
// document.write("floor value :" +a);

// d. ceil value of the number 
// var a = Math.ceil(3.45214) ;
// document.write("ceil value :" +a);

// Question 2. Write a program that takes a negative floating point number from user & display the following in your browser.

// a. number 
// var a =  -2.673 ;
// document.write("number :" + a);

// b. round off value of the number
// var a =  Math.round(-2.673) ;
//  document.write("round off value :" +a);

// c. floor value of the number
// var a =  Math.floor(-2.673) ;
//  document.write("floor value :" +a); 

// d. ceil value of the numbe
// var a =  Math.ceil(-2.673) ;
//  document.write("ceil value :" +a);

// Question 3. Write a program that displays the absolute value of a number. E.g. 
// absolute value of -4 is 4 & absolute value of 5 is 5
//  var a =  Math.abs(-4) ;
// document.write("The absolute valur of " + " -4 " + "\n" +" is " + "\n" +a);

// Question 4. Write a program that simulates a dice using random() method of JS Math class. 
// Display the value of dice in your browser.

// var diceRoll = Math.floor( Math.random() * 6 ) +1;
// Math.floor( Math.random() * 3 )
// alert('You rolled a ' + diceRoll);

// Question 5. Write a program that simulates a coin toss using random() method of JS Math class.
// Display the value of coin in your browser.


// var head = prompt("Enter heads username");
// var tail = prompt("Enter heads username");
// var toss = Math.random() * 2;
// var floor = Math.floor(toss)
// if(floor === 0){
//     alert("Heads " + Head + "win the toss");
// }else{
//     alert("Tail " + tail + "win the toss");
// }

// Question 6. Write a program that shows a random number between 1 and 100 in your browser.
//  var num = Math.floor(Math.random() * 100) +1;
//  document.write(num);


// 7. Write a program that asks the user about his weight.
//  Parse the user input and display his weight in your browser. 
//  Possible user inputs can be: 
// a. 50 b. 50kgs c. 50.2kgs d. 50.2kilograms 
// var arr = [];
// var num = 5;

// for(var i=0; i<num; i++) {
	
	
// 	arr[i] = prompt('Enter Weight ' + (i+1));
// }

// document.write(arr);

// var a = +prompt("Enter your weight")
// var arr = [50, 500 , 50.2 , 50.2]
// for (var i=0; i<arr.length; i++){
//     if(i === a){
//         alert("your weight found")
//     }else("not found")
// }

/// Task 31-34

// Question 1. Write a program that displays current date and time in
// your browser.

// var a =  Date();
// document.write(a);

// Question 2. Write a program that alerts the current month in words.
// For example December.

// var monthsName = ["January", "Feburary", "March", "April", "May", "June", "July"];
// var now = new Date();
// var theMonth = now.getMonth();
// var nameOfMonth = monthsName[theMonth];
// document.write(nameOfMonth);

// var a = new Date();
// var b = a.toString();
// var c = b.slice(3,7)
// document.write(c);
