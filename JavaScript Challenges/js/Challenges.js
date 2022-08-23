function validateForm() {
    let x = document.forms["myForm"]["firstname"].value;
    let y = document.forms["myForm"]["lastname"].value;
    let z = document.forms["myForm"]["phonenumber"].value;
    if (x == "") {
        alert("All fields must be filled out");
        return false;
    }
    if (y == "") {
        alert("All fields must be filled out");
        return false;
    }
    if (z == "") {
        alert("All fields must be filled out");
        return false;
    }
}

function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

$("#slideshow > div:gt(0)").hide();

setInterval(function() {
    $('#slideshow > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshow');
}, 3000);

var fruit = {name: "Apple", color: "red", size: "Medium"};
var JSONstring = JSON.stringify(fruit);
document.getElementById("myFruit").innerHTML = JSONstring;

var car = '{"manufacturer": "Toyota", "model": "Highlander", "color": "Gray"}';
var JSONcar = JSON.parse(car);
document.getElementById("myCar").innerHTML = JSONcar.manufacturer + " " + JSONcar.model;

localStorage.setItem("Color", "Blue");
document.getElementById("storage").innerHTML = localStorage.getItem("Color");