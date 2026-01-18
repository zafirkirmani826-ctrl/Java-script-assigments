document.title = "Chapter 12-13 ";
alert("Welcome to Chapter 12-13!");

//question 1
//write a program that takes character(number or string)in a variable & checks whether the given input 
//is a capital letter or a small case letter. 
// (Hint: ASCII codes: A=65, Z=90, a=97, z=122)


var char = prompt("Enter a character:");
var ascii = char.charCodeAt(0);
if (ascii >= 65 && ascii <= 90) {
    alert(char + " is a capital letter.");
} else if (ascii >= 97 && ascii <= 122) {
    alert(char + " is a small case letter.");
}
else {
    alert(char + " is not a letter.");
}


//question 2
//write a program that accept two integers & display the larger number.
//and also if two integers are equal 


var num1 = parseInt(prompt("Enter first integer:"));
var num2 = parseInt(prompt("Enter second integer:"));
if (num1 > num2) {
    alert(num1 + " is larger than " + num2);
}
else if (num2 > num1) {
    alert(num2 + " is larger than " + num1);
}
else {
    alert("Both numbers are equal.");
}

//pareInt is used to convert string input to integer
//parseFloat can also be used to accept decimal numbers



//question 3
//write a program that takes input a number from user & 
//state whether the number is positive, negative or zero.
var num = parseFloat(prompt("Enter a number:"));
if (num > 0) {
    alert("The number is positive.");
}
else if (num < 0) {
    alert("The number is negative.");
}
else {
    alert("The number is zero.");
}

//question 4
//write a program that takes a character (i.e. string of length 1) 
//and returns true if it is a vowel, 
//false otherwise

var vowel = prompt("Enter a character:");
vowel = vowel.toLowerCase();
if (vowel === 'a') {
    alert(vowel + " is a vowel.");
}
else if (vowel === 'e') {
    alert(vowel + " is a vowel.");
}   
else if (vowel === 'i') {
    alert(vowel + " is a vowel.");
}   
else if (vowel === 'o') {
    alert(vowel + " is a vowel.");
}
else if (vowel === 'u') {
    alert(vowel + " is a vowel.");
}      
else {
    alert(vowel + " is not a vowel.");
}

//question 5
//write a program that
//asks the user for a password & then
// 1. If the user does not enter a password,
//  the program will prompt "Please enter your password"
// 2. If the user enters a correct password,
//  the program will display "Correct! The password you entered matches the original password"
// 3. If the user enters an incorrect password,
//  the program will display "Incorrect password"



var originalPassword = "mypassword";
var userPassword = prompt("Enter your password:");
if (userPassword === "") {
    alert("Please enter your password.");
}
else if (userPassword === originalPassword) {
    alert("Correct! The password you entered matches the original password.");
}
else {
    alert("Incorrect password.");
}

//question 6
//6 this if/else statement does not work.
//try to fix it:
// var greeting;
// var hour = 13;  
// if (hour < 18) {
//     greeting = "Good day";
// }
// else 
//     greeting = "Good evening";
// }

var greeting;
var hour = 13;
if (hour < 18) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}

//question 7
//write a program that takes time as input from user in 24 hours clock format like: 1900 = 7pm
// & 
//display the following messages using if else statements
var time = parseInt(prompt("Enter time in 24 hours format (e.g., 1900 for 7pm):"));
if (time >= 0000 && time < 1200) {
    alert("Good morning!");
}
else if (time >= 1200 && time < 1700) {
    alert("Good afternoon!");
}
else if (time >= 1700 && time < 2100) {
    alert("Good evening!");
}
else if (time >= 2100 && time <= 2359) {
    alert("Good night!");
}
else {
    alert("Invalid time format!");
}
