//question no 1;
//write a program to take  city name as a input from the user if user enter the karachi
//welcome the user like this ;welcome to city of ligths 

var cityname =prompt("Enter city name");
if(cityname.toLowerCase() == "karachi"){
    alert("welcome to"+" "+ cityname +""+ ""+ "city of lights")
}
else{
    alert("welcome to"+""+ cityname)
}

//question no 2
//write a program to take "gender" as input  from the user if the user is male
//give the message "welcome sir" and if the user is female give the message 
//good morning female

var gender= prompt("Enter your gender")
if(gender=="male"){
    alert("Good Morning sir");
}
else{
     alert("Good Morning madam");
}

//question no 3
//write a program to take input color of road traffic signal from the user
//if the color is red ,yellow or green show the message accordingly

var signalcolor= prompt("Enter road traffic signal color")
if(signalcolor=="red"){
    alert("Must Stop");
}
else if(signalcolor=="yellow"){
    alert("Ready to move");
}
else if(signalcolor=="green"){
    alert("Move now");
}
else{
    alert("Invalid color");
}

//question no 4
//write a program to take input remaining fuel in car from user
//if the fuel is less than 0.25liters show the message "please refill the fuel in your car" 

var fuel= +prompt("Enter remaining fuel in car (in liters)")
if(fuel<0.25){
    alert("Please refill the fuel in your car");
}
else{
    alert("You have enough fuel");
}

//question no 5
//run this script , & check whether alert message would be displayed or not
//a. var a = 4; 
//if (++a === 5){
//alert("given condition for variable a is true");
//}

var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}
//b. var b = 82;
//if (b++ === 83){
//alert("given condition for variable b is true");      
//}

var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");      
}
//c. var c = 12;
//if (c++ === 13){
//alert("condition 1 is true");

//} 
//if (c === 13){
//alert("condition 2 is true");
//}
//if (++c < 14){
//alert("condition 3 is true");
//}
//if(c === 14){
//alert("condition 4 is true");
//}
var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}   
//d. var materialCost = 20000;
//var laborCost = 2000;
//var totalCost = materialCost + laborCost;
//if (totalCost === laborCost + materialCost){
//alert("The cost equals");
//}
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}
//e. if (true){
//alert("True");
//}
if (true){
alert("True");
}
//if (false){
//alert("False");
//}
if (false){
alert("False");
}   
//f. if("car" < "cat"){
//alert("car is smaller than cat");
//}
if("car" < "cat"){
alert("car is smaller than cat");
}
//question no 6
//write a program to take input the marks obtained in three subjects & total marks
//calculate the percentage & show the grade according to following criteria
var subject1= +prompt("Enter marks obtained in subject 1");
var subject2= +prompt("Enter marks obtained in subject 2");
var subject3= +prompt("Enter marks obtained in subject 3");
var totalmarks= +prompt("Enter total marks");

var obtainedmarks= subject1 + subject2 + subject3;
var percentage= (obtainedmarks/totalmarks)*100;
var grade, remarks;
if(percentage>=80){
    grade="A-one";
    remarks="Excellent";
}
else if(percentage>=70){
    grade="A";
    remarks="Good";
}
else if(percentage>=60){
    grade="B";
    remarks="You need to improve";
}
else{
    grade="Fail";
    remarks="Sorry";
}
console.log("Total Marks: "+ totalmarks);
console.log("Marks Obtained: "+ obtainedmarks);
console.log("Percentage: "+ percentage + "%");
console.log("Grade: "+ grade);
console.log("Remarks: "+ remarks);
//question no 7
//guess game
//store a secret number (ranging from 1 to 10) in a variable
//ask the user to guess the secret number
//if the user guesses the same number show "Bingo! Correct answer"
//if the user guesses the number +1 or -1 show "Close enough to the correct answer"

var secretnumber= 7;
var userguess= +prompt("Guess the secret number (between 1 to 10)");
if(userguess === secretnumber){
    alert("Bingo! Correct answer");
}
else if(userguess === secretnumber + 1 || userguess === secretnumber - 1){
    alert("Close enough to the correct answer");
}
else{
    alert("Wrong guess! Try again.");
}
//question no 8
//write a program to check whether the given number is divisible by 3
var number= +prompt("Enter a number to check divisibility by 3");
if(number % 3 === 0){
    alert(number + " is divisible by 3");
}
else{
    alert(number + " is not divisible by 3");
}
//question no 9
//write a program to check whether the given number is even or odd
var num= +prompt("Enter a number to check even or odd");
if(num % 2 === 0){
    alert(num + " is even");
}
else{
    alert(num + " is odd");
}
//question no 10
//write a program to take temperature as input & show message according to following criteria
var temperature= +prompt("Enter the temperature");
if(temperature > 40){
    alert("It is too hot outside.");
}
else if(temperature > 30){
    alert("The Weather today is Normal.");
}
else if(temperature > 20){
    alert("Today’s Weather is cool.");
}
else if(temperature > 10){
    alert("OMG! Today’s weather is so Cool.");
}   
//question no 11
//write a program to create a calculator for +,-,*, / & % using if statements
var num1= +prompt("Enter first number");
var num2= +prompt("Enter second number");
var operation= prompt("Enter operation (+, -, *, /, %)");
var result;
if(operation == "+"){
    alert(result= num1 + num2);
}
else if(operation == "-"){
    alert(result= num1 - num2)
}
else if(operation == "*"){
    alert(result= num1 * num2)
}
else if(operation == "/"){
    alert(result= num1 / num2)
}
else if(operation == "%"){
    alert(result= num1 % num2)
}
else{
    alert("Invalid operation");
}