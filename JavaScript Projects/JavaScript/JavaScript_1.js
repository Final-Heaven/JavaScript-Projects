function car_function() {
    var car_output;
    var cars = document.getElementById("choice").value;
    var car_string = " is a good manufacturer!";
    switch(cars) {
        case "Toyota":
            car_output = "Toyota" + car_string;
        break;
        case "Honda":
            car_output = "Honda" + car_string;
        break;
        case "Chevrolet":
            car_output = "Chevrolet" + car_string;
        break;
        case "Ford":
            car_output - "Ford" + car_string;
        break;
        case "Subaru":
            car_output = "Subaru" + car_string;
        break;
        default:
            car_output = "Please enter a car exactly as written on the above list.";
    }
    document.getElementById("result").innerHTML = car_output;
}

function class_function() {
    var X = document.getElementsByClassName("classname");
    X[1].innerHTML = "Changed paragraph";
}

var c = document.getElementById("canvas1");
var ctx = c.getContext("2d");
ctx.moveTo(0,0);
ctx.lineTo(200,100);
ctx.stroke();

var d = document.getElementById("canvas2");
var dtx = d.getContext("2d");

var grd = dtx.createLinearGradient(0, 0, 170, 0);
grd.addColorStop(0, "black");
grd.addColorStop(1, "white");

dtx.fillStyle = grd;
dtx.fillRect(20, 20, 150, 100);