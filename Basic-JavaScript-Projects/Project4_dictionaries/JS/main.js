/*The dictionary is a data structure that stores data in key-value pairs. In JavaScript, dictionaries are implemented as objects. Each key in a dictionary is unique and maps to a specific value. The values can be of any data type, including numbers, strings, arrays, or even other objects. Dictionaries are useful for organizing and accessing data efficiently based on unique identifiers.*/
function my_Dictionary() {
    var Animal = {
        Species: "Dog",
        Color: "Black",
        /*Color: "Black2",*/
        Breed: "Labrador",
        Age: 5,
        Sound: "Bark!"
    };
    document.getElementById("Dictionary1").innerHTML = Animal.Color;
}

/*delete operator is used to remove a property from an object. The delete operator removes a property from an object. If no more references to the same property are held, it is eventually released automatically.*/
function my_Dictionary_and_Operator_Delete() {
    var Animal = {
        Species: "Dog",
        Color: "Black",
        Breed: "Labrador",
        Age: 5,
        Sound: "Bark!"
    };
    //document.getElementById("Dictionary2").innerHTML = Animal.Sound;
    delete Animal.Sound;
    document.getElementById("Dictionary2").innerHTML = Animal.Sound;
}

