//question no 1

//write a program to take the number in variable do the required arthmetic to display the following result in your browser

var a = 9;
var b = ++a;
console.log("Result:");
console.log("The value of a is: " + a);
console.log(".......................")
console.log("The value of ++a is:" + ++a);
console.log("Now the value of a is: " + a);
console.log("The value of a++ is: " + a++);
console.log("Now the value of a is: " + a);
console.log("The value of --a is: " + --a);
console.log("Now the value of a is: " + a);
console.log("The value of a-- is: " + a--);
console.log("Now the value of a is: "+ b);

//question no 2

//What will be the output in variables a, b & result after execution of the following script:
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
//Explain the output at each stage:
var a = 2, b = 1;
var result = --a - --b + ++b + b--;
//--a;  //1
//--a - --b; //1 - 0 = 1
//--a - --b + ++b; //1 - 0 + 1 = 2
//--a - --b + ++b + b--; //1 - 0 + 1 + 1 = 3
console.log("a is: " + a);
console.log("b is: " + b);
console.log("result is: " + result);
//question no 3

//Write a program that takes input a name from user & greet the user.
var username = prompt("Enter your name");
alert("welcome"+" "+username)

//question no 4

//Write a program to take input a number from user & display it’s multiplication table on your browser. If user does not enter a new number, multiplication table of 5 should be displayed by default.
var num = +prompt("Enter a number to show its multiplication table", 5);
for (var i = 1; i <= 10; i++) {
    var result = num * i;
    console.log(num + " x " + i + " = " + result);
}

//question no 5
//Take 3 subjects name from user & total marks for each subject is 100, store it in another variable. 
// Take obtained marks for first subject from user & second & third subject marks from user. 
// Now calculate total marks & percentage & show the result in your browser like this.(Hint: user table)by using console



var subject1 =prompt("Enter the subject no 1");
var subject2 =prompt("Enter the subject no 2 ");
var subject3 =prompt("Enter the subject no 3");
var totalMarks = 100;
var marks1 = +prompt("Enter obtained marks for " + subject1);
var marks2 = +prompt("Enter obtained marks for " + subject2);
var marks3 = +prompt("Enter obtained marks for " + subject3);
var totalObtainedMarks = marks1 + marks2 + marks3;
var percentage = (totalObtainedMarks / (totalMarks * 3)) * 100;
console.log("Subject\tTotal Marks\tObtained Marks\tPercentage");
console.log(subject1 + "\t" + totalMarks + "\t\t" + marks1 + "\t\t" + (marks1 / totalMarks) * 100 + "%");
console.log(subject2 + "\t" + totalMarks + "\t\t" + marks2 + "\t\t" + (marks2 / totalMarks) * 100 + "%");
console.log(subject3 + "\t" + totalMarks + "\t\t" + marks3 + "\t\t" + (marks3 / totalMarks) * 100 + "%");
console.log(" \t" + (totalMarks * 3) + "\t\t" + totalObtainedMarks + "\t\t" + percentage + "%");

