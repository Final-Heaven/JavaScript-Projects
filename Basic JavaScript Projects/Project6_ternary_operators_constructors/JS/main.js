function Ride_Function() { //Function using ternary operation
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

function age_function() { //Function using ternary operation
    var Age, canVote;
    Age = document.getElementById("Age").value;
    canVote = (Age < 18) ? "You are not old enough to vote.":"You can vote!";
    document.getElementById("Status").innerHTML = canVote;
}

function Vehicle(Make, Model, Year, Color) { //Constructor function
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() { //Displays within an HTML element
    document.getElementById("Keywords_and_Constructors").innerHTML = 
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year;
}

function Dog(Breed, Color, Age) { //Constructor function
    this.Dog_Breed = Breed;
    this.Dog_Color = Color;
    this.Dog_Age = Age;
}
var Sandy = new Dog("Boxer", "Brown", 8);
function dogFunction() { //Displays within an HTML element
    document.getElementById("New_and_This").innerHTML = 
    "Sandy is a " + Sandy.Dog_Color + " " + Sandy.Dog_Breed + " and is " + Sandy.Dog_Age + " years old.";
}

function count_Function() { //Nested function, adds 1 to starting point
    document.getElementById("Nested_Function").innerHTML = Count();
    function Count() {
        var Starting_point = 9;
        function Plus_one() {Starting_point += 1;}
        Plus_one();
        return Starting_point;
    }
}