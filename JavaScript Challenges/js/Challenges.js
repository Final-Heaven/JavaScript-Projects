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