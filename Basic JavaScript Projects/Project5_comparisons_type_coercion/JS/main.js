document.write(typeof 729); //Gives data type of 729

document.write("Word" + 8); //Combines string and number

function myFunction() { //Function to return NaN since you can't do 0/0
    document.getElementById("test").innerHTML = 0/0;
}

function function2() { //Checking if string is Not a Number
    document.getElementById("test2").innerHTML = isNaN("Word");
}

function function3() { //Checking if number is Not a Number
    document.getElementById("test3").innerHTML = isNaN(453);
}

function infinity_function() { //Displaying infinity due to number being too large
    document.getElementById("infinity").innerHTML = 3E310
}

function negative_infinity_function() { //Displaying -infinity due to number being too large in negative direction
    document.getElementById("negative_infinity").innerHTML = -3E310
}

document.write(13 > 5); //Using Boolean logic to return true/false

document.write(2 > 43); //Using Boolean logic to return true/false

console.log(5 + 7); //Displays output in console in browser

console.log(5 > 7); //Displays in console in browser

document.write(17 == 17); //Boolean logic to check equality

document.write(17 == 16); //Boolean logic to check equality

//Checking if value and data types match below

document.write(100 === 100);

document.write(100 === "dog");

document.write(100 === "100");

document.write(100 === 82);

//Using AND and OR operators

document.write(10 > 5 && 10 > 3);

document.write(10 > 3 && 10 < 5);

document.write(10 > 3 || 10 < 5);

document.write(10 < 3 || 10 > 20);

//Using NOT operator

function not_function() {
    document.getElementById("not").innerHTML = !(10 == 9);
}

function not_function2() {
    document.getElementById("not2").innerHTML = !(10 == 10);
}