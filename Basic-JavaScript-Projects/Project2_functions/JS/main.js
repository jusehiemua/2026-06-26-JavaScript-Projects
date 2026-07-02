
/**
 * 
 * function myFunction() {
    var sentence = "I am learning";
    sentence += " a lot from this book!";
    document.getElementById("Concatenate").innerHTML = sentence;
}

 */
/*function that concatenate using str = str1+str2 */
function Concatenate_Two_Strings() {
    var Sent1 = document.getElementById("x1").innerHTML;
    var Sent2 = document.getElementById("y1").innerHTML;

    var str = '<span style="color:red;">' + Sent1 + '</span> ' +
              '<span style="color:blue;">' + Sent2 + '</span>';

    document.getElementById("Button_Text1").innerHTML = str;
}

/*function that concatenate using the += operator of the form str += str1 */
function Concatenate_Two_Using_Strings_Plus_EQ() {
    var str = '<span style="color:red;">';
    str += document.getElementById("x1").innerHTML;
    str += '</span> ';

    str += '<span style="color:green;">';
    str += document.getElementById("z1").innerHTML;
    str += '</span>';

    document.getElementById("Button_Text2").innerHTML = str;
}
