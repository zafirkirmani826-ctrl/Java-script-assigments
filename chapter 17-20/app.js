document.title = "Chapter 12-13 ";

//question no 1;
//declare and intialize an empty multidimensional array.(aray of arrays)
var multiArray = [[]];
console.log(multiArray);


//question no 2;
//declare and intialize a multidimensional array representing the following matrix:
var matrix = [
  [0, 1, 2, 3],
  [1, 0, 1, 2],
[2, 1, 0, 1],
];
console.log(matrix);

//question no 3;
//Write a program to print numeric counting from 1 to 10.
for (var i = 1; i <= 10; i++) {
    console.log(i);
}

//question no 4;
//Write a program to print multiplication table of any number using for loop. Table number & length should be taken as an input from user.
var tableNumber = parseInt(prompt("Enter a number to show its multiplication table:"));
var tableLength = parseInt(prompt("Enter length of multiplication table:"));
console.log("Multiplication Table of " + tableNumber);
console.log("Length " + tableLength);
for (var i = 1; i <= tableLength; i++) {
    var result = tableNumber * i;
    console.log(tableNumber + " x " + i + " = " + result);
}

//question no 5;
//Write a program to print items of the following array using for loop:
var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
for (var i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
console.log("Element at index 0 is " + fruits[0]);
console.log("Element at index 1 is " + fruits[1]);
console.log("Element at index 2 is " + fruits[2]);
console.log("Element at index 3 is " + fruits[3]);
console.log("Element at index 4 is " + fruits[4]);

//question no 6;
//Generate the following series in your browser. See example output.
console.log("Counting:");
for (var i = 1; i <= 15; i++) {
    console.log(i);
}
console.log("Reverse Counting:");
for (var i = 10; i >= 1; i--) {
    console.log(i);
}
console.log("Even:");
for (var i = 0; i <= 20; i += 2) {
    console.log(i);
}
console.log("Odd:");
for (var i = 1; i < 20; i += 2) {
    console.log(i);
}
console.log("Series:");
for (var i = 2; i <= 20; i += 2) {
    console.log(i + "k");
}

//question no 7;
//You have an array A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”] Write a program to enable “search by user input” in an array. After searching, prompt the user whether the given item is found in the list or not. Example:

var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var userInput = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?");
var found = false;
for (var i = 0; i < A.length; i++) {
    if (A[i].toLowerCase() === userInput.toLowerCase()) {
        found = true;
        break;
    }
}
if (found) {
    console.log(userInput + " is available at index " + i + " in our bakery.");
} else {
    console.log("We are sorry. " + userInput + " is not available in our bakery.");
}

//question no 8;
//Write a program to identify the largest number in the given array. A = [24, 53, 78, 91, 12].
var A = [24, 53, 78, 91, 12];
var largest = A[0];
for (var i = 1; i < A.length; i++) {
    if (A[i] > largest) {
        largest = A[i];
    }
}
console.log("The largest number is " + largest);

//question no 9;
//Write a program to identify the smallest number in the given array. A = [24, 53, 78, 91, 12].
var A = [24, 53, 78, 91, 12];
var smallest = A[0];
for (var i = 1; i < A.length; i++) {
    if (A[i] < smallest) {
        smallest = A[i];
    }
}
console.log("The smallest number is " + smallest);

//question no 10;
//Write a program to print multiples of 5 ranging 1 to 100.
console.log("Multiples of 5 from 1 to 100:");
for (var i = 5; i <= 100; i += 5) {
    console.log(i);
}
