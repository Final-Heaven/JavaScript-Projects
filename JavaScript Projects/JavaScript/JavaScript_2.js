function validateForm() {
    let x = document.forms["myForm"]["fname"].value;
    let y = document.forms["myForm"]["lname"].value;
    if (x == "") {
        alert("Form must be filled out");
        return false;
    }
    if (y == "") {
        alert("Form must be filled out");
        return false;
    }
}