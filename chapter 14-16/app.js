document.title = "Chapter 14-16";
alert("Welcome to Chapter 14-16!");

//question 1
//declare an empty array using JS literal notation to store student names in future.
var studentNames = [];
console.log("Question 1:", studentNames);

//question 2
//declare an empty array using JS object notation to store student names in future.
var studentNamesObj = new Array();
console.log("Question 2:", studentNamesObj);  

//question 3
//declare and initialize a strings array.


var stringArray = ["apple", "banana", "cherry"];
console.log("Question 3:", stringArray);

//question 4
//declare and initialize a numbers array.

var numberArray = [1, 2, 3, 4, 5];
console.log("Question 4:", numberArray);

//question 5
//declare and initialize a boolean array.
var booleanArray = [true, false, true, false];
console.log("Question 5:", booleanArray);

//question 6
//declare and initialize a mixed array. 

var mixedArray = ["hello", 42, true, 3.14, "world"];
console.log("Question 6:", mixedArray);

//question 7 
//declare and initialize an array to store qualifications in Pakistan (e.g"SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD")
//then display the qualifications in your browser.
var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
console.log("Question 7: Qualifications in Pakistan:");
for (var i = 0; i < qualifications.length; i++) {
    console.log((i + 1) + ") " + qualifications[i]);
}

//question 8
//declare and initialize an array to store student names and their scores, 
//then display the scores & percentages of students.
var studentNamesQ8 = ["micheal", "john", "tony"];
var studentScores = [450, 380, 420];
var totalMarks = 500;
console.log("Question 8: Student Scores and Percentages:");
for (var j = 0; j < studentNamesQ8.length; j++) {
    var percentage = (studentScores[j] / totalMarks) * 100;
    console.log("Score of " + studentNamesQ8[j] + " is " + studentScores[j] + ". Percentage: " + percentage.toFixed(2) + "%");
}
//question 9
//initialize an array with color names.display the array elements in your browser.
//a) Ask the user what color he/she wants to add to the beginning & add that color to the beginning of the array. Display the updated array in your browser.
//b) Ask the user what color he/she wants to add to the end & add that color to the end of the array. Display the updated array in your browser.
//c) Add two more colors to the beginning of the array. Display the updated array in your browser.
//d) Delete the first color in the array. Display the updated array in your browser.
//e) Delete the last color in the array. Display the updated array in your browser.
//f) Ask the user at which index he/she wants to add a color & color name. Then add the color to desired position/index. Display the updated array in your browser.
//g) Ask the user at which index he/she wants to delete color(s) & how many colors he/she wants to delete. Then remove the same number of color(s) from user-defined position/index. Display the updated array in your browser.
var colors = ["red", "green", "blue"];
console.log("Question 9: Initial Colors Array:", colors);
//a
var colorToAddBeginning = prompt("Enter a color to add to the beginning of the array:");
colors.unshift(colorToAddBeginning);
console.log("After adding to beginning:", colors);
//b
var colorToAddEnd = prompt("Enter a color to add to the end of the array:");
colors.push(colorToAddEnd);
console.log("After adding to end:", colors);
//c
colors.unshift("yellow", "purple");
console.log("After adding two more to beginning:", colors);
//d
colors.shift();
console.log("After deleting first color:", colors);
//e
colors.pop();
console.log("After deleting last color:", colors);
//f
var indexToAdd = parseInt(prompt("Enter the index to add a color:"));
var colorNameToAdd = prompt("Enter the color name to add:");
colors.splice(indexToAdd, 0, colorNameToAdd);
console.log("After adding color at index " + indexToAdd + ":", colors);
//g
var indexToDelete = parseInt(prompt("Enter the index to delete color(s):"));
var numberOfColorsToDelete = parseInt(prompt("Enter the number of colors to delete:"));
colors.splice(indexToDelete, numberOfColorsToDelete);
console.log("After deleting color(s) from index " + indexToDelete + ":", colors);
//question 10
//initialize an array with student scores. Sort the array in ascending order & display the scores & percentages of students.


var studentScoresQ10 = [320, 230, 480, 120];
console.log("Question 10: Student Scores in Ascending Order:");
studentScoresQ10.sort(function(a, b) { return a - b; });
for (var k = 0; k < studentScoresQ10.length; k++) {
    console.log("Score: " + studentScoresQ10[k]);
}

//question 11
//initialize an array with city names. Copy 3 array elements from cities array to selectedCities array.
var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
var selectedCities = cities.slice(1, 4);
console.log("Question 11: Selected Cities:", selectedCities);

//question 12
//write a program to create a single string from the below mentioned array:
//var arr = ["This", "is", "my", "cat"];
var arr = ["This", "is", "my", "cat"];
var singleString = arr.join(" ");
console.log("Question 12: Single String from Array:", singleString);

//question 13
//create a new array. Store values one by one in such a way that you can access the values in  order. (FIFO First In First Out)
var fifoArrayQ13 = [];
fifoArrayQ13.push("item1");
fifoArrayQ13.push("item2");
fifoArrayQ13.push("item3");
console.log("Question 13: FIFO Array:");
while (fifoArrayQ13.length > 0) {
    console.log(fifoArrayQ13.shift());
}

//question 14
//create a new array. Store values one by one in such a way that you can access the values in the  reverse order in which they were stored. (LIFO last In First Out)
var lifoArrayQ14 = [];
lifoArrayQ14.push("item1");
lifoArrayQ14.push("item2");
lifoArrayQ14.push("item3");
console.log("Question 14: LIFO Array:");
while (lifoArrayQ14.length > 0) {
    console.log(lifoArrayQ14.pop());
}
//question 15
//write a program to store phone manufacturers (Apple, Samsung, Motorola, Nokia, Sony & Haier) in an array.
var phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
console.log("Question 15: Phone Manufacturers:");
for (var l = 0; l < phoneManufacturers.length; l++) {
    console.log(phoneManufacturers[l]);
} 
//display the following dropdown/select menu in your browser using document.write() method:
document.write("<select>");
for (var m = 0; m < phoneManufacturers.length; m++) {
    document.write("<option>" + phoneManufacturers[m] + "</option>");
}
document.write("</select>");

