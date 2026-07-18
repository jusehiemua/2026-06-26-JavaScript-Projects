function for_Loop() {
    //alert("I am here");
    var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
    var Content = "";
    var Y;
    var htmlContent = "";

    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

function while_Loop() {

    var Digit = "";
    var X = 1;
    while (X < 11) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Counting_to_Ten").innerHTML = Digit;
}

function cat_pics() {
    //alert("1. I am here");
    var Content = "";
    var Y;
    var position;
    //var htmlContent = "";
    var Cat_Pictures = [];
    Cat_Pictures[0] = "sleeping";
    Cat_Pictures[1] = "playing";
    Cat_Pictures[2] = "eating";
    Cat_Pictures[3] = "purring";

    //alert("2. I am here" + Cat_Pictures);

    for (Y = 0; Y < Cat_Pictures.length; Y++) {
        if (Y == 0) { position = "1st"; }
        if (Y == 1) { position = "2nd"; }
        if (Y == 2) { position = "3rd"; }
        if (Y == 3) { position = "4th"; }
        Content += "In this " + position + " picture, the cat is " +
            Cat_Pictures[Y] + ".<br>";

        //alert("3. I am here" + Content);

    }
    document.getElementById("Cat").innerHTML = Content;
}

function primitive_immutable() {
    var x = 1;
    document.getElementById("x1").textContent = '<p id=\"x1\"> var x = ' + x + '<\/p>';
    var x = 2;
    document.getElementById("x2").textContent = '<p id=\"x2\"> var x = ' + x + '<\/p>';
    const y = 4;
    document.getElementById("y1").textContent = '<p id=\"y1\"> const y = ' + y + '<\/p>';
    try {
        y = 7;
    }
    catch (err) {
        document.getElementById("y2").innerHTML =
            "&lt;p id=\"y2\"&gt; <span style='color:red;'>Error: You cannot modify a const variable y from y = 4 to y = 7.</span>&lt;\/p&gt;";
    }
}

function object_immutable() {
    const Musical_Instrument = { type: "guitar", brand: "Fender", color: "black" };
    //display of the Musical_Instrument object BEFORE modifying a property in it
    document.getElementById("aaa").innerHTML =
        JSON.stringify(Musical_Instrument);
    Musical_Instrument.color = "blue";
    Musical_Instrument.price = "$900";
    //display of the Musical_Instrument object AFTER modifying a property and adding another property into it
    document.getElementById("bbb").innerHTML =
        JSON.stringify(Musical_Instrument);

    document.getElementById("ccc").innerHTML = "The cost of the " + Musical_Instrument.type + " was " + Musical_Instrument.price;


}