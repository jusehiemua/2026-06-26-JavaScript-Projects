function addition_Function() {
    var addition = 2 + 2;
    document.getElementById("Math1").innerHTML = "2 + 2 = " + addition;
}

function subtraction_Function() {
    var Subtraction = 5 - 2;
    document.getElementById("Math2").innerHTML = "5 - 2 = " + Subtraction;
}

function multiplication() {
    var simple_Multiply = 6 * 8;
    document.getElementById("Math3").innerHTML = "6 &#xD7; 8 = " + simple_Multiply;
}

function division() {
    var simple_Divide = 48 / 6;
    document.getElementById("Math4").innerHTML = "48 &#xF7; 6 = " + simple_Divide;
}

function multiple_Operations_Math() {
    var simple_Math = (1 + 2) * 10 / 2 - 8;
    document.getElementById("Math5").innerHTML = "1 plus 2, all multiplied by 10, all divided in half and then subtracted by 8 = (1 + 2) &#xD7; 10 &#xF7; 2 - 8 = (3) &#xD7; 10 &#xF7; 2 - 8 = 30 &#xF7; 2 - 8  = 15 - 8 = " + simple_Math;
}

function modulus_Operator() {
    var simple_Modulus = 25 % 6;
    document.getElementById("Math6").innerHTML = "When you divide 25 by 6 you have a remainder of: " + simple_Modulus;
}

function negation_Operator() {
    var x = 10;
    document.getElementById("Math7").innerHTML = "The negation of the number x = " + x + " is " + (-x);
}

/*
function increment_Operator() {          
var X = 5;
X++;
document.write(X);
*/

function increment_Operator() {
    var x = 5;
    /*var y = x++;*/
    document.getElementById("Math8").innerHTML = "When you start a number x = " + x++ + " and apply the increment operator x++ to it, the result is " + x;
}

function decrement_Operator() {
    var x = 5;
    /*var y = x--;*/
    document.getElementById("Math9").innerHTML = "When you start a number x = " + x-- + " and apply the decrement operator x-- to it, the result is " + x;
}

function random_Number() {
    var a = -413, b = 573
    var x = Math.round(Math.random() * (b - a) + a);
    document.getElementById("Math10").innerHTML = "A random number between " + a + " and " + b + " is: " + x;
}