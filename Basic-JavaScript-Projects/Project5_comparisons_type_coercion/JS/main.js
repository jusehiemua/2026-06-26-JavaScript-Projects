function my_Type_Of() {
    let x = '"Word"';
    let y = 6;
    let z = true;
    document.getElementById("TypeOf1").innerHTML = "The code \"typeof(" + x + ")\" = " + typeof (x);
    document.getElementById("TypeOf2").innerHTML = "The code \"typeof(" + y + ")\" = " + typeof (y);
    document.getElementById("TypeOf3").innerHTML = "The code \"typeof(" + z + ")\" = " + typeof (z);
}


function my_Type_Coercion() {
    let x1 = "10";
    let x2 = 3;
    let y1 = -100;
    let y2 = "78";
    let z1 = 15;
    let z2 = "14";
    let w1 = 5;
    let w2 = "apple";
    document.getElementById("TypeCoercion1").innerHTML = 'Type Coercion <span style=\"color: blue; font-weight: bold;\">IS VALID</span> for the expression <span style=\"color: green; font-weight: bold;\">\"' + x1 + "\" + " + x2 + "</span> and when the expression is type coerced to yield the result:<br>\"" + x1 + "\" + <span style=\"color: red;\">" + x2 + "</span> = \"" + x1 + "\" + <span style=\"color: red;\">String(" + x2 + ")</span> = \"" + x1 + "\" + <span style=\"color: red;\">\"" + x2 + "\"</span><span style=\"color: green; font-weight: bold;\"> = \"" + (x1 + x2) + "\"</span>";
    document.getElementById("TypeCoercion2").innerHTML = 'Type Coercion <span style=\"color: blue; font-weight: bold;\">IS VALID</span> for the expression <span style=\"color: green; font-weight: bold;\">' + y1 + " - \"" + y2 + "\"" + "</span> and when the expression is type coerced to yield the result:<br>" + y1 + " - <span style=\"color: red;\">\"" + y2 + "\"</span> = " + y1 + " - <span style=\"color: red;\">Number(\"" + y2 + "\")</span> = " + y1 + " - <span style=\"color: red;\">" + y2 + "</span><span style=\"color: green; font-weight: bold;\"> = " + (y1 - y2) + "</span>";
    document.getElementById("TypeCoercion3").innerHTML = 'Type Coercion <span style=\"color: blue; font-weight: bold;\">IS VALID</span> for the expression <span style=\"color: green; font-weight: bold;\">' + z1 + " * \"" + z2 + "\"" + "</span> and when the expression is type coerced to yield the result:<br>" + z1 + " * <span style=\"color: red;\">\"" + z2 + "\"</span> = " + z1 + " * <span style=\"color: red;\">Number(\"" + z2 + "\")</span> = " + z1 + " * <span style=\"color: red;\">" + z2 + "</span><span style=\"color: green; font-weight: bold;\"> = " + (z1 * z2) + "</span>";
    document.getElementById("TypeCoercion4").innerHTML = 'Type Coercion <span style=\"color: blue; font-weight: bold;\">IS INVALID</span> for the expression <span style=\"color: green; font-weight: bold;\">' + w1 + " * \"" + w2 + "\"" + "</span> and when the expression is type coerced to yield the result:<br>" + w1 + " * <span style=\"color: red;\">\"" + w2 + "\"</span> = " + w1 + " * <span style=\"color: red;\">Number(\"" + w2 + "\")</span> = " + w1 + " * <span style=\"color: red;\">" + Number(w2) + "</span><span style=\"color: green; font-weight: bold;\"> = " + (w1 * w2) + "</span>";
}

function my_TypesNaNInf_and_NegInf() {
    let x = 0 / 0;
    let y = 1 / 0;
    let z = -1 / 0;
    let w = 1 / "Word";
    let v = "Word" / 1;
    let u = 2 * 10E308;
    let t = -2 * 10E308;
    document.getElementById("TypesNaNInf_and_NegInf1").innerHTML = "The code \"0 / 0\" = " + x + " and the type of the result is: " + typeof (x);
    document.getElementById("TypesNaNInf_and_NegInf2").innerHTML = "The code \"1 / 0\" = " + y + " and the type of the result is: " + typeof (y);
    document.getElementById("TypesNaNInf_and_NegInf3").innerHTML = "The code \"-1 / 0\" = " + z + " and the type of the result is: " + typeof (z);
    document.getElementById("TypesNaNInf_and_NegInf4").innerHTML = "The code \"1 / " + "\"Word\"\" = " + w + " and the type of the result is: " + typeof (w);
    document.getElementById("TypesNaNInf_and_NegInf5").innerHTML = "The code \"\"Word\" / 1\" = " + v + " and the type of the result is: " + typeof (v);
    document.getElementById("TypesNaNInf_and_NegInf6").innerHTML = "The code \"2 * 10E308\" = " + u + " and the type of the result is: " + typeof (u);
    document.getElementById("TypesNaNInf_and_NegInf7").innerHTML = "The code \"-2 * 10E308\" = " + t + " and the type of the result is: " + typeof (t);
}

function my_Boolean_Logical_Operators() {
    let x = 5 > 10;
    let y = 5 < 10;
    let z = 5 == 10;
    let w = 5 === 10;
    let v = 5 != 10;
    let u = 5 !== 10;
    let t = (x && y) || (z && w);
    document.getElementById("booleanExpression1").innerHTML = "The code \"5 > 10\" = " + x + " and the type of the result is: " + typeof (x);
    document.getElementById("booleanExpression2").innerHTML = "The code \"5 < 10\" = " + y + " and the type of the result is: " + typeof (y);
    document.getElementById("booleanExpression3").innerHTML = "The code \"5 == 10\" = " + z + " and the type of the result is: " + typeof (z);
    document.getElementById("booleanExpression4").innerHTML = "The code \"5 === 10\" = " + w + " and the type of the result is: " + typeof (w);
    document.getElementById("booleanExpression5").innerHTML = "The code \"5 != 10\" = " + v + " and the type of the result is: " + typeof (v);
    document.getElementById("booleanExpression6").innerHTML = "The code \"5 !== 10\" = " + u + " and the type of the result is: " + typeof (u);
    document.getElementById("booleanExpression7").innerHTML = "The code \"(5 > 10) && (5 < 10)\" = " + t + " and the type of the result is: " + typeof (t);
}

function my_isNaN() {
    let x = 0 / 0;
    let y = 1 / 0;
    let z = "507";
    let w = 507;
    document.getElementById("isNaN1").innerHTML = "The code \"isNaN(0 / 0)\" = " + isNaN(x);
    document.getElementById("isNaN2").innerHTML = "The code \"isNaN(1 / 0)\" = " + isNaN(y);
    document.getElementById("isNaN3").innerHTML = "The code \"isNaN(\"" + z + "\")\" = " + isNaN(z);
    document.getElementById("isNaN4").innerHTML = "The code \"isNaN(" + w + ")\" = " + isNaN(w);
}

function my_Console_log() {
    let x = 5 + 10;
    console.log("The code \"5 + 10\" = " + x);
    document.getElementById("consoleLog").innerHTML = "The code \"5 + 10\" = " + x + " and the result is logged to the console.<br>Check the console to see the result.";
}

function my_BooleanConsole_log() {
    let x = 5 > 10;
    console.log("The logical expression \"5 > 10\" = " + x);
    document.getElementById("BooleanConsoleLog").innerHTML = "The logical expression \"5 > 10\" = " + x + " and the result is logged to the console.<br>Check the console to see the result.";
}

function my_doubleTripleEqual() {
    let x = 5;
    let y = "5";
    let z = 10;
    let w = "10";
    let a = 5;
    let b = 10;
    document.getElementById("DoubleTriple1").innerHTML = "The code \"5 == \'5\'\" = " + (x == y) + " and the code \"5 === \'5\'\" = " + (x === y);
    document.getElementById("DoubleTriple2").innerHTML = "The code \"10 == \'10\'\" = " + (z == w) + " and the code \"10 === \'10\'\" = " + (z === w);
    document.getElementById("DoubleTriple3").innerHTML = "The code \"5 == 10\" = " + (a == b) + " and the code \"5 === 10\" = " + (a === b);
    document.getElementById("DoubleTriple4").innerHTML = "The code \"5 == 5\" = " + (a == a) + " and the code \"5 === 5\" = " + (a === a);}