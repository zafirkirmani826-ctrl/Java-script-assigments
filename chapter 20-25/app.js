//question no 1
//write a program that takes two user inputs for first and last name using prompt and merge them in a new variable fullName. Greet the user using his full name.
var firstName = prompt("Enter your first name:");
var lastName = prompt("Enter your last name:");
var fullName = firstName + " " + lastName;
alert("Hello, " + fullName + "!");

//question no 2
//write a program that takes a user input for favorite mobile phone model. Find and display the length of user input in your browser.
var mobileModel = prompt("Enter your favorite mobile phone model:");
var modelLength = mobileModel.length;
document.write("Your favorite mobile phone model is: " + mobileModel + "<br>");
document.write("Length of the model name: " + modelLength);

//question no 3
//write a program that finds the index of letter "n" in the word "Pakistani" and displays the result in your browser.
var word = "Pakistani";
var index = word.indexOf("n");
document.write("The index of letter 'n' in the word 'Pakistani' is: " + index);

//question no 4
//write a program that finds the last index of letter "l" in the word "Hello World" and displays the result in your browser.
var phrase = "Hello World";
var lastIndex = phrase.lastIndexOf("l");
document.write("The last index of letter 'l' in the phrase 'Hello World' is: " + lastIndex);



//question no 5
//write a program that finds the character at index 3 in the word "Pakistani" and displays the result in your browser.
var word = "Pakistani";
var charAtIndex3 = word.charAt(3);
document.write("The character at index 3 in the word 'Pakistani' is: " + charAtIndex3);

//question no 6
//reapeat q1 using string concatination method
var firstName = prompt("Enter your first name:");
var lastName = prompt("Enter your last name:");
var fullName = firstName.concat(" ", lastName);
alert("Hello, " + fullName + "!");

//question no 7
//write a program that replaces "Hyder" with "Islam" in the word "Hyderabad" and displays the result in your browser.
var city = "Hyderabad";
var newCity = city.replace("Hyder", "Islam");
document.write("City after replacement: " + newCity);

//question no 8
//write a program that replaces all occurrences of "and" with "&" in the string "Ali and Sami are best friends. They play cricket and football together." and displays the result in your browser.
var message = "Ali and Sami are best friends. They play cricket and football together.";
var newMessage = message.replace(/and/g, "&");
document.write("Message after replacement: " + newMessage);

//question no 9
//write a program that converts a string "472" to a number 472. Display the values & types in your browser.
var str = "472";
var num = Number(str);
document.write("Value: " + num + "<br>");
document.write("Type: " + typeof num);

//question no 10
//write a program that takes user input in lowercase. Convert and show the input in uppercase.
var userInput = prompt("Enter a string in lowercase:");
var upperCaseInput = userInput.toUpperCase();
document.write("Uppercase: " + upperCaseInput);

//question no 11
//write a program that takes user input convert and show the input in title case.   
var userInput = prompt("Enter a string:");
var titleCaseInput = userInput.charAt(0).toUpperCase() + userInput.slice(1).toLowerCase();
document.write("Title Case: " + titleCaseInput);

//question no 12
//write a program that converts the variable num to string. var num = 35.36 ; Remove the dot to display "3536" display in your browser.
var num = 35.36;
var strNum = num.toString().replace(".", "");
document.write("Number as string without dot: " + strNum);


//question no 14
//you have an array A = [cake", "apple pie", "cookie", "chips", "patties"] 
// Write a program to enable "search by user input" in an array.
//  After searching, prompt the user whether the given item is found in the 
// list or not. Note: Perform case insensitive search. Whether the user enters
//  cookie, Cookie, COOKIE or coOkIE, program should inform about its availability
// .


var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var userInput = prompt("Enter the item you want to search for:").toLowerCase();
var found = false;
for (var i = 0; i < A.length; i++) {
    if (A[i].toLowerCase() === userInput) {
        found = true;
        break;
    }
}

if (found) {
    alert(userInput + " is available in the list.");
} else {
    alert(userInput + " is not available in the list.");
}   

//question no 15
//write a program to take password as an input from user.
// The password must qualify these requirements:
//a. It should contain alphabets and numbers
//b. It should not start with a number
//c. It must at least 6 characters long
var password = prompt("Enter your password:");
var passwordPattern = /^(?![0-9])[A-Za-z0-9]{6,}$/;
if (passwordPattern.test(password)) {
    alert("Password is valid.");
} else {
    alert("Password is invalid. It must contain alphabets and numbers, not start with a number, and be at least 6 characters long.");
}
//question no 16    
//write a program to convert the following string to an array using string split method.
var university = "University of Karachi";
var arr = university.split("");
for (var i = 0; i < arr.length; i++) {
    document.write(arr[i] + "<br>");
}

//question no 17
//write a program to display the last character of a user input.
var userInput = prompt("Enter a string:");
var lastChar = userInput.charAt(userInput.length - 1);
document.write("The last character of your input is: " + lastChar);

//question no 18
//you have a string "The quick brown fox jumps over the lazy dog". Write a program to count number of occurrences of word "the" in given string.
var str = "The quick brown fox jumps over the lazy dog";
var lowerStr = str.toLowerCase();
var count = (lowerStr.match(/the/g) || []).length;


//the end of javascript all chapters 1-25
