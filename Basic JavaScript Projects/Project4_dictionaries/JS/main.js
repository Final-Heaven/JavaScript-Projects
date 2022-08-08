function my_Dictionary() { //Creating a dictionary and displaying the value for color
    var Car = {
        Brand: "Toyota",
        Color: "Red",
        Year: 2019,
        Type: "SUV"
    };
    document.getElementById("Dictionary").innerHTML = Car.Color;
}

function second_dictionary() { //Creating a dictionary with duplicate keys
    var person = {
        Name: "Bridget",
        Age: 19,
        Hobbies: "Yo-yo",
        Name: "May"
    };
    delete person.Name //Deleting the name keys
    document.getElementById("second_dictionary").innerHTML = person.Name; //This returns "undefined" because the names were deleted
}