//1:  Write a program that take two numbers & add them in a 
// new variable. Show the result in your browser.  


document.write("<h3>1. Write a program that take two numbers & add them in a new variable. Show the result in your browser. </h3> <br>");

var num1 = 3;
var num2 = 5;
var newValue = num1 + num2;
console.log(newValue);
document.write("The sum of " + num1 +" and "+ num2 + " is "+ newValue + " <br>");


// 2. Repeat task1 for subtraction, multiplication, division & modulus.

document.write("<h3>2. Repeat task1 for subtraction, multiplication, division & modulus </h3> <br>");


// Subtraction

var substract = num1 - num2;
console.log(substract);
document.write("The difference of " + num1 +" and "+ num2 + " is " + substract + " <br>" );

// multiplication

var multiplication = num1 * num2;
console.log(multiplication);
document.write("The product of " + num1 + " and "+ num2 + " is " + multiplication + " <br>");


// division

var division = num1 / num2;
console.log(division);
document.write("The quotient of " + num1 + " and "+ num2 + " is " + division + " <br>" );

// modulus

var modulus = num1 % num2;
console.log(modulus);
document.write("The modulus of " + num1 + " and "+ num2 + " is " + modulus + " <br>" );

// 3. Do the following using JS Mathematic Expressions

document.write("<h3>3. Do the following using JS Mathematic Expressions</h3> <br>");

// a. Declare a variable. 
var number;

// b. Show the value of variable in your browser like “Value 
// after variable declaration is: ??”. 

document.write("Value after variable declaration is: " + number + "<br>");

// c. Initialize the variable with some number. 
number = 5;


// d. Show the value of variable in your browser like “Initial 
// value: 5”.

document.write("Initial value: " + number + "<br>");

// e. Increment the variable. 

number++;


// f. Show the value of variable in your browser like “Value 
// after increment is: 6”.

document.write("Value after increment is: " + number + "<br>");

// g. Add 7 to the variable.
number = number + 7;
console.log(number + 7);
// h. Show the value of variable in your browser like “Value  after addition is: 13”.

document.write("Value after addition is: " + number + "<br>");

// i. Decrement the variable.
number--; 

// j. Show the value of variable in your browser like “Value 
// after decrement is: 12”. 

document.write("Value after decrement is: " + number + "<br>");


// k. Show the remainder after dividing the variable’s value 
// by 3.  

var remainder = number % 3;



// l. Output : “The remainder is : 0”.

document.write("The remainder is: " + remainder);


document.write("<h3>4. Cost of one movie ticket is 600 PKR. Write a script to store </h3> <br>");
 
var ticketCost = 600;
var totalCost = ticketCost * 5;
document.write("The total cost to buy 5 tickets is "  + totalCost + "<br>");


// 5. Write a script to display multiplication table of any 
// number in your browser.

document.write("<h3>5. Write a script to display multiplication table of any number in your browser. </h3> <br>");


var num = 4;
document.write("Table of num <br>")
document.write(num + " x 1 = " + (num * 1) + "<br>")
document.write(num + " x 2 = " + (num * 2) + "<br>")
document.write(num + " x 3 = " + (num * 3) + "<br>")
document.write(num + " x 4 = " + (num * 4) + "<br>")
document.write(num + " x 5 = " + (num * 5) + "<br>")
document.write(num + " x 6 = " + (num * 6) + "<br>")
document.write(num + " x 7 = " + (num * 7) + "<br>")
document.write(num + " x 8 = " + (num * 8) + "<br>")
document.write(num + " x 9 = " + (num * 9) + "<br>")
document.write(num + " x 10 = " + (num * 10) + "<br>")


// 6. The Temperature Converter: It’s hot out! Let’s make a 
// converter based on the steps here. 

document.write("<h3>6. The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here.  </h3> <br>");

// a.  Store a Celsius temperature into a variable.

var celsius = 20;
var fahrenheit = (celsius * 9 / 5) + 32;

// b. Convert it to Fahrenheit & output “NNoC is NNoF”. 

document.write( celsius + "°C is " + fahrenheit + "°F <br>");

// c. Now store a Fahrenheit temperature into a variable.

var fahrenheitTemp = 46;
var celsiusTemp = (fahrenheitTemp - 32) * 5 / 9;

// d. Convert it to Celsius & output “NNoF is NNoC”.

document.write( fahrenheitTemp + "°F is " + celsiusTemp + "°C <br>");


// 7.  Write a program to implement checkout process of a 
// shopping cart system for an e-commerce website. Store 
// the following in variables

document.write("<h3>7. Write a program to implement checkout process</h3> <br>");


// a. Price of item 1 
var item1Price = 200;
document.write("price  of item 1 is " + "Rs " + item1Price + "<br>");

// b. Price of item 2 
var item2Price = 400;
document.write("price  of item 2 is " + "Rs " + item2Price + "<br>");

// c. Ordered quantity of item 1 
var item1Qty = 3;
document.write("ordered quantity of item 1 is " + item1Qty + "<br>");

// d. Ordered Quantity of item 2 
var item2Qty = 5;
document.write("ordered quantity of item 2 is " + item2Qty + "<br>");

// e. Shipping charges 
var shippingChg = 250;
document.write("shipping charges are " + "Rs " + shippingChg + "<br>");


var totalCost = (item1Price * item1Qty) +  (item2Price * item2Qty) + shippingChg;
document.write("The total cost of your order is " + "Rs " + totalCost + "<br>");
 

// 8. Store total marks & marks obtained by a student in 2 
// variables. Compute the percentage & show the result in 
// your browser

document.write("<h3> 8. Store total marks & marks obtained by a student in 2 variables.Compute the percentage & show the result in your browser </h3> <br>");

var totalMarks = 980;
document.write("Total Marks: " + totalMarks + "<br>");
var marksObtained = 804;
document.write("Obtained Marks: " + marksObtained + "<br>");
var percentage = (804 / 980 ) * 100;
document.write("Percentage: " + percentage + "<br>");


// 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a 
// script to convert the total currency to Pakistani Rupees. 
// Perform all calculations in a single expression. 

document.write("<h3> 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the total currency to Pakistani Rupees. Perform all calculations in a single expression.  </h3> <br>");

var totalPKR =(10 * 104.80) + (25 * 28);

document.write("Total currency in PKR is " + totalPKR + "<br>");


// 10. Write a program to initialize a variable with some 
// number and do arithmetic in following sequence:

document.write("<h3> 10. Write a program to initialize a variable with some number and do arithmetic in following sequence:   </h3> <br>");
var Number = 2;
var result = ((Number + 5) * 10) / 2;
document.write("The answer is " + result + "<br>");


// 11. The Age Calculator: Forgot how old someone is? 
// Calculate it! 


document.write("<h3> 11. The Age Calculator: Forgot how old someone is? Calculateit!  </h3> <br>");

var currentYear = 2026;
document.write( "Current year " + currentYear + "<br>" );
var birthYear = 2001;
document.write( "Birth year " + birthYear + "<br>" );

 var age1 = currentYear - birthYear;
 var age2 = age1 - 1;
 document.write( "The possible age is " + age1 + " or " + age2 + "<br>" );


//  12. The Geometrizer: Calculate properties of a circle. 


document.write("<h3> 12. The Geometrizer: Calculate properties of a circle.  </h3> <br>");

// a. Store a radius into a variable.
var radius = 25;
document.write("The radius of a circle is is " + radius + "<br>");

var pi = 3.142
document.write("The value of pi is " + pi + "<br>");
// b. Calculate the circumference based on the radius

var circumference = 2 * pi * radius;
document.write("The circumference of a circle is " + circumference + "<br>");
var area = 2 * pi * radius * radius;
document.write("The area  of a circle is " + area + "<br>");

// 13. The Lifetime Supply Calculator: 

document.write("<h3> 13. The Lifetime Supply Calculator:  </h3> <br>");
 
var snack = "chocolate chip";
document.write("Favorite Snack: " + snack + "<br>");


var currentAge = "15";
document.write("Current Age: " + currentAge + "<br>");


var maxAge = "65";
document.write("Estimated Maximum Age: " + maxAge + "<br>");


var amountPerDay = 3;
document.write("Amount per day: " + amountPerDay + "<br><br>");


var totalNeeded = (maxAge - currentAge) * 365 * amountPerDay;
document.write("You will need "+ totalNeeded + " " + snack + " to last you until the ripe old age of "  + maxAge + "<br>");