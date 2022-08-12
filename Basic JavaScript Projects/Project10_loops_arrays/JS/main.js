function Call_Loop() { //While loop, counts up to 10
    var Digit = "";
    var X = 1;
    while (X < 11) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Loop").innerHTML = Digit;
}

let text = "Hello World!"; //Using let keyword
document.getElementById("length").innerHTML = text.length;

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Vioin", "Trumpet", "Flute"];
var Content = "";
var Y ;
function for_Loop() { //For loop, returns instruments in array
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

function array_Function() { //Function using array
    var fruits = [];
    fruits[0] = "apple";
    fruits[1] = "strawberry";
    fruits[2] = "grape";
    fruits[3] = "orange";
    document.getElementById("Array").innerHTML = "My favorite fruit is: " + fruits[1] + ".";
}

function constant_function() { //Using const keyword
    const vehicle = {type:"truck", brand:"Ford", color:"red"};
    vehicle.color = "blue";
    vehicle.price = "$30,000"
    document.getElementById("Constant").innerHTML = "He drove a " +
    vehicle.color + " " + vehicle.type + ". It was a " + vehicle.brand +
    " and cost " + vehicle.price + ".";
}

//Demonstration of block scope using let keyword

var Z = 100;
document.getElementById("assignment").innerHTML = Z
{
    let Z = 50;
    document.getElementById("assignment2").innerHTML = Z
}
document.getElementById("assignment3").innerHTML = Z

function returnFunction(a, b) {
    return a + b;
}

//Using return keyword

document.getElementById("return").innerHTML = returnFunction(7, 6);

let car = {
    make: "Dodge ",
    model: "Viper ",
    year: "2021 ",
    color: "red ",
    description: function() {
        return "The car is a " + this.year + this.color + this.make + this.model;
    }
};
document.getElementById("Car_Object").innerHTML = car.description();

function break_function() { //Break function, stops counting once reaching 3
    let text = "";
    for (let X = 0; X < 10; X++) {
        if (X === 3) { break; }
        text += X + "<br>";
    }
    document.getElementById("break").innerHTML = text;
}

function continue_function() { //Continue function, skips over 3 and keeps going
    let text = "";
    for (let X = 0; X < 10; X++) {
        if (X === 3) { continue; }
        text += X + "<br>";
    }
    document.getElementById("continue").innerHTML = text;
}