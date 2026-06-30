alert("\n1: From external JavaScript file: Hello, World!\nYay!!!");
window.alert("\n2: From\nexternal JavaScript: window\ndot alert()");
document.write("<br>3: From internal JavaScript: document.write");
document.write("<br>7: From internal JavaScript: document.write<br>");
var A = "This is a string";
document.write("<br>s8: From internal JavaScript: document.write(" + A + ")");

/*
function My_First_Function() {
    document.getElementById("Button_Text").style.backgroundColor = "lightblue";
    var str = "This is the button text!";
    document.getElementById("Button_Text").innerHTML = str;
}
*/

function My_First_Function() {                  //Defining a function and naming it
    document.getElementById("Button_Text").style.backgroundColor = "lightblue";
    var str = "This is the button text!";       //Defining a variable and giving it
    //a string value
    document.getElementById("Button_Text").innerHTML = str; //Putting the value
    //of the variable into the HTML elementFromPoint
    //with the "Button_Text" id
}

/*function Concatenate_Two_Strings(Sent1: any, Sent2: any): any*/
function Concatenate_Two_Strings(Sent1, Sent2) {
    var str = Sent1+" "+Sent2;
    document.getElementById("Button_Text2").innerHTML = str;

}