document.title = "chapter no 5";
//question 1
//write a program that take two numbers & add then in a new variable. 
// Show the result in your browser.



var num1 = 10;
var num2 = 20;
var sum = num1 + num2;
console.log("Sum of " + num1 + " and " + num2 + "  is " + sum); 
//question 2
//Reapeat the task 1 for subtraction, multiplication, division & modulus.

var sub = num2 - num1;
var mul = num1 * num2;
var div = num2 / num1;
var mod = num2 % num1;
console.log("Subtraction of " + num2 + " and " + num1 + " is " + sub);
console.log("Multiplication of " + num1 + " and " + num2 + " is " + mul);
console.log("Division of " + num2 + " by " + num1 + " is " + div);
console.log("Modulus of " + num2 + " and " + num1 + " is " + mod);


//question no 3
//do the follwowing using JS Mathematic Expressions
//a. Declare a variable.
//b. Show the value of variable in your browser like "Value after variable declaration is: ??"
//c. Initialize the variable with some number.
//d. Show the value of variable in your browser like "Initial value: 5".
//e. Increment the variable.
//f. Show the value of variable in your browser like "Value after increment is: 6".
//g. Add 7 to the variable.
//h. Show the value of variable in your browser like "Value after addition is: 13".
//i. Decrement the variable.
//j. Show the value of variable in your browser like "Value after decrement is: 12".
//k. Show the remainder after dividing the variable's value by 3.
//l. Output : "The remainder is : 0".


var variable;
console.log("Value after variable declaration is: " + variable);
variable = 5;
console.log("Initial value: " + variable);
variable++;
console.log("Value after increment is: " + variable);
variable += 7;
console.log("Value after addition is: " + variable);
variable--;
console.log("Value after decrement is: " + variable);
var remainder = variable % 3;
console.log("The remainder is : " + remainder);

//question no 4
//Cost of one movie ticket is 600 PKR.
//Write a script to store ticket price in a variable & calculate the cost of buying 5 tickets to a movie.
//Example output:


var ticketprice = 600;
var numberoftickets = 5;
var totalcost = ticketprice * numberoftickets;
console.log("The total cost to buy " + numberoftickets + " tickets to a movie is " + totalcost + " PKR");

//question no 5
//Write a script to display multiplication table of any number in your browser.
//E.g
var tablenumber = 4;
console .log("Multiplication Table of " + tablenumber);
for(var i=1; i <=10; i++){
    var result =tablenumber * i ;
    console.log(tablenumber + "x" + i) +"=" + result;
}
//question no 6
//The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here.
//a. Store a Celsius temperature into a variable.
//b. Convert it to Fahrenheit & output "NNoC is NNoF".
//c. Now store a Fahrenheit temperature into a variable.
//d. Convert it to Celsius & output "NNoF is NNoC".

var celsius = 25;
var fahrenheit = (celsius * 9/5) + 32;
console.log(celsius + "°C is " + fahrenheit + "°F");
var fahrenheit2 = 70;
var celsius2 = (fahrenheit2 - 32) * 5/9;
console.log(fahrenheit2 + "°F is " + celsius2 + "°C");
