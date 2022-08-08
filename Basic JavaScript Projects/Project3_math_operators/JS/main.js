function addition_function() { //This adds numbers together
    var addition = 2 + 2;
    document.getElementById("addition").innerHTML = "2 + 2 = " + addition;
}

function subtraction_function() { //This subtracts numbers
    var subtraction = 5 - 2;
    document.getElementById("subtraction").innerHTML = "5 - 2 = " + subtraction;
}

function multiplication_function() { //This multiplies numbers
    var multiplication = 6 * 8;
    document.getElementById("multiplication").innerHTML = "6 x 8 = " + multiplication;
}

function division_function() { //This divides numbers
    var division = 48 / 6;
    document.getElementById("division").innerHTML = "48 / 6 = " + division;
}

function everything_function() { //This function does several math operations and displays the result
    var everything = (1 + 2) * 10 / 2 - 5;
    document.getElementById("everything").innerHTML = "1 plus 2, multiplied by 10, divided in half and then subtracted by 5 equals " + everything;
}

function modulus_function() { //This function divides numbers and displays the remainder
    var modulus = 25 % 6;
    document.getElementById("modulus").innerHTML = "When you divide 25 by 6 you have a remainder of: " + modulus;
}

function negative_function() { //This function makes a number negative
    var negative = 10;
    document.getElementById("negative").innerHTML = -negative;
}

function increment_function() { //This increments a number (increases it by 1)
    var X = 5;
    X++;
    document.getElementById("increment").innerHTML = X;
}

function decrement_function() { //This decrements a number (decreases it by 1)
    var Y = 5.25;
    Y--;
    document.getElementById("decrement").innerHTML = Y;
}

function random_function() { //This returns a random number between 0 and 1
    var random = Math.random();
    document.getElementById("random").innerHTML = random;
}

function round_function() { //This rounds a number to the nearest whole number
    var round = Math.round(7.8);
    document.getElementById("round").innerHTML = round;
}