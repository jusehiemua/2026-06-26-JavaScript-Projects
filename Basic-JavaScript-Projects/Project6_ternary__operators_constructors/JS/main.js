function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short" : "You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

function Vote_Function() {
    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote = (Age < 18) ? "You are too young" : "You are old enough";
    document.getElementById("Vote").innerHTML = Can_vote + " to vote.";
}

function my_Object_Oriented_Programming1a() {
    var myCar1 = {
        make: "Dodge ",
        model: "Viper ",
        year: "2021 ",
        color: "red ",
        description: function () {
            return "The 1st car is a " + this.year + this.color + this.make + this.model;
        }
    };
    var myCar2 = {
        make: "Ford ",
        model: "Mustang ",
        year: "2020 ",
        color: "blue ",
        description: function () {
            return "The 2nd car is a " + this.year + this.color + this.make + this.model;
        }
    };
    var myCar3 = {
        make: "Chevrolet ",
        model: "Corvette ",
        year: "2026 ",
        color: "green ",
        description: function () {
            return "The 3rd car is a " + this.year + this.color + this.make + this.model;
        }
    };

    document.getElementById("Object_Oriented_Programming1a").innerHTML = myCar1.description();
    document.getElementById("Object_Oriented_Programming2a").innerHTML = myCar2.description();
    document.getElementById("Object_Oriented_Programming3a").innerHTML = myCar3.description();
}

function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");

function my_Object_Oriented_Programming1b() {
    document.getElementById("Object_Oriented_Programming1b").innerHTML =
        "Jack drives a " + Jack.Vehicle_Color + "-colored " + Jack.Vehicle_Model +
        " manufactured in " + Jack.Vehicle_Year;
    document.getElementById("Object_Oriented_Programming2b").innerHTML =
        "Emily drives a " + Emily.Vehicle_Color + "-colored " + Emily.Vehicle_Model +
        " manufactured in " + Emily.Vehicle_Year;
    document.getElementById("Object_Oriented_Programming3b").innerHTML =
        "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model +
        " manufactured in " + Erik.Vehicle_Year;
}

// Define the formal Class blueprint
class myCar2 {
    constructor(make, model, year, color, description) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.color = color;
        this.description = description;
    }
}

// Create 3 separate instances using the 'new' keyword
var car1 = new myCar2("Chevrolet", "Silverado", 2018, "Grey", "A heavy duty truck.");
var car2 = new myCar2("BMW", "3 Series", 2020, "Silver", "Luxury vehicle.");
var car3 = new myCar2("Jeep", "Wrangler", 2023, "Green", "Good for off-roading.");

// Get the div container from the HTML
var displayDiv = document.getElementById("Object_Oriented_Programming1c");

// Build the HTML string manually for each class instance
var htmlContent = "";

htmlContent = htmlContent + "<h2>Car 1</h2>";
htmlContent = htmlContent + "<p>Make: " + car1.make + "</p>";
htmlContent = htmlContent + "<p>Model: " + car1.model + "</p>";
htmlContent = htmlContent + "<p>Year: " + car1.year + "</p>";
htmlContent = htmlContent + "<p>Color: " + car1.color + "</p>";
htmlContent = htmlContent + "<p>Description: " + car1.description + "</p>";
htmlContent = htmlContent + "<hr>";

htmlContent = htmlContent + "<h2>Car 2</h2>";
htmlContent = htmlContent + "<p>Make: " + car2.make + "</p>";
htmlContent = htmlContent + "<p>Model: " + car2.model + "</p>";
htmlContent = htmlContent + "<p>Year: " + car2.year + "</p>";
htmlContent = htmlContent + "<p>Color: " + car2.color + "</p>";
htmlContent = htmlContent + "<p>Description: " + car2.description + "</p>";
htmlContent = htmlContent + "<hr>";

htmlContent = htmlContent + "<h2>Car 3</h2>";
htmlContent = htmlContent + "<p>Make: " + car3.make + "</p>";
htmlContent = htmlContent + "<p>Model: " + car3.model + "</p>";
htmlContent = htmlContent + "<p>Year: " + car3.year + "</p>";
htmlContent = htmlContent + "<p>Color: " + car3.color + "</p>";
htmlContent = htmlContent + "<p>Description: " + car3.description + "</p>";

function my_Object_Oriented_Programming1c() {
    // Insert the text into the web page
    displayDiv.innerHTML = htmlContent;
}

/*
// Insert the text into the web page
displayDiv.innerHTML = htmlContent; */

function my_Nested_Functions() {
    document.getElementById("Nested_Functions").innerHTML = "The webpage output of the nested function is: " + Count();
    //document.getElementById("Nested_Functions").innerHTML = Count();
    function Count() {
        var Starting_point = 9;
        function Plus_one() { Starting_point += 1; }
        Plus_one();
        return Starting_point;
    }
}