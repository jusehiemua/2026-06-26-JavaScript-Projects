//Case 1. Here, var X is declared as a global variable and so it is visible to both functions AddNumbers1() and AddNumbers2().

var X = 10;// X is a global variable because it is declared outside of any function

function AddNumbers1() {
    //document.write(20 + X + "<br>");
    document.getElementById("Add_numbers1").innerHTML = "Inside function AddNumbers1(), X + 20 = " + X + " + 20 = " + (X + 20);
}

function AddNumbers2() {
    //document.write(X + 100);
    document.getElementById("Add_numbers2").innerHTML = "Inside function AddNumbers2(), X + 100 = " + X + " + 100 = " + (X + 100);
}

function my_Global_Variable() {
    //var X is a global variaable and so it is visible inside both functions AddNumbers1() and AddNumbers2()
     document.getElementById("scope1").innerHTML = "<span style='color:red; font-weight:bold;'>Scope of variable X (= " + X + "):</span><span style='font-weight: bold;'> Global</span>";
    AddNumbers1();
    AddNumbers2();
}

//Case 2. Here, var Y is declared as a local variable inside the function AddNumbers3() and so it is not visible to the function AddNumbers4().

function AddNumbers3() {
    var Y = 25;// Y is a local variable because it is declared inside of the function
    document.getElementById("scope2").innerHTML = "<span style='color:red; font-weight:bold;'>Scope of variable Y (= " + Y + "):</span><span style='font-weight: bold;'> Local</span>  (<em>inside function AddNumbers3()</em>)";

    //document.write(20 + X + "<br>");
    document.getElementById("Add_numbers3").innerHTML = "Inside function AddNumbers3(), Y + 20 = " + Y + " + 20 = " + (Y + 20);
}

function AddNumbers4() {
    //document.write(Y + 100);
    var isYDefined = (typeof Y !== 'undefined');
    if (!isYDefined) {
        document.getElementById("Add_numbers4").innerHTML = "Inside function AddNumbers4(), Y is not within its scope and so Y + 100 cannot be computed.";
        console.log("Inside function AddNumbers4(), Y is not within its scope and so Y and Y + 100 cannot be computed.");
    }else {
        document.getElementById("Add_numbers4").innerHTML = "Inside function AddNumbers4(), Y + 100 = " + Y + " + 100 = " + (Y + 100);
    }
}

function my_Local_Variable() {
    AddNumbers3();
    AddNumbers4();
}

function get_Date() {
    if (new Date().getHours() < 18) {
        document.getElementById("Greeting").innerHTML = "The proper greeting for the time of day is: Good Morning or Good Afternoon!";
    }
}

//var balance_In_my_Account;
const min_balance_In_A_Rich_Account = 300000;
const max_balance_In_A_Poor_Account = 15000;

function my_If_Statement_Assignment1() {
  var balance_In_my_Account1;  
    balance_In_my_Account1 = document.getElementById("my_Balance_Input1").value;
    alert("Your account balance is: $" + balance_In_my_Account1);
    if (balance_In_my_Account1 >= min_balance_In_A_Rich_Account) {
        document.getElementById("my_If_Statement_Assignment1").innerHTML = "<span style='color: green;'>You are rich because your account balance of $" + balance_In_my_Account1 + " is greater than or equal to the minimum balance of $" + min_balance_In_A_Rich_Account + " for a rich account.</span>";

    }
}


function my_If_Statement_Assignment2() {
  var balance_In_my_Account2;  
    balance_In_my_Account2 = document.getElementById("my_Balance_Input2").value;
    alert("Your account balance is: $" + balance_In_my_Account2);
    if (balance_In_my_Account2 >= min_balance_In_A_Rich_Account) {
        document.getElementById("my_If_Statement_Assignment2").innerHTML = "<span style='color: green;'>You are rich because your account balance of $" + balance_In_my_Account2 + " is greater than or equal to the minimum balance of $" + min_balance_In_A_Rich_Account + " for a rich account.</span>";

    }else {
        document.getElementById("my_If_Statement_Assignment2").innerHTML = "<span style='color: brown;'>You are not rich because your account balance of $" + balance_In_my_Account2 + " is not greater than or equal to the minimum balance of $" + min_balance_In_A_Rich_Account + " for a rich account. This means that you are either poor or middle class.</span>";
    }
}

function my_If_Statement_Assignment3() {
  var balance_In_my_Account3;  
    balance_In_my_Account3 = document.getElementById("my_Balance_Input3").value;
    alert("Your account balance is: $" + balance_In_my_Account3);
    if (balance_In_my_Account3 >= min_balance_In_A_Rich_Account) {
        document.getElementById("my_If_Statement_Assignment3").innerHTML = "<span style='color: green;'>You are rich because your account balance of $" + balance_In_my_Account3 + " is greater than or equal to the minimum balance of $" + min_balance_In_A_Rich_Account + " for a rich account.</span>";
    } else if (balance_In_my_Account3 <= max_balance_In_A_Poor_Account) {
        document.getElementById("my_If_Statement_Assignment3").innerHTML = "<span style='color: red; background-color: yellow;'>You are poor because your account balance of $" + balance_In_my_Account3 + " is less than or equal to the maximum balance of $" + max_balance_In_A_Poor_Account + " for a poor account.</span>";
    } else {
        document.getElementById("my_If_Statement_Assignment3").innerHTML = "<span style='color: blue;'>You are middle class because your account balance of $" + balance_In_my_Account3 + " is neither greater than nor equal to the minimum balance of $" + min_balance_In_A_Rich_Account + " for a rich account, nor is it less than or equal to the maximum balance of $" + max_balance_In_A_Poor_Account + " for a poor account.</span>";
    }
}
