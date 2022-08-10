//Global variable
var X = 30;

function Add_1() {
    document.write(20 + X + "<br>");
}
function Add_2() {
    document.write(15 + X + "<br>");
}
Add_1();
Add_2();

///////////////////////////////////////////////////

//Local variable
function Subtract_1() {
    var Y = 5;
    document.write(10 - Y + "<br>");
}
function Subtract_2() { //Function with error (Y is not defined), shows in console
    console.log(30 - Y);
}
Subtract_1();
Subtract_2();

///////////////////////////////////////////////////

function myFunction() { //Gets current time and uses conditional/branching statement
    if (new Date().getHours() > 12) {
        document.getElementById("date").innerHTML = "Good afternoon";
    }
}

function if_Function() { //if statement
    Z = 10;
    if (Z > 5) {
        document.getElementById("statement").innerHTML = "Z is greater than 5.";
    }
}

function addFunction() { //Accepts user input and gives different results depending on input
    Answer = document.getElementById("answer").value;
    if (Answer == 12) {
        Result = "You are correct!";
    }
    else {
        Result = "You are not correct.";
    }
    document.getElementById("response").innerHTML = Result;
}

function Time_function() { //Gets current time and uses conditional/branching statements
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply
}