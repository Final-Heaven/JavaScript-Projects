function My_First_Function() { //Creating a function
    var str = "This is the button text!"; //I am creating a variable and giving it a value
    document.getElementById("Button_Text").innerHTML = str; //The element with the ID Button_Text will display the string when the function is called
}

function myFunction() { //Creating a function
    var sentence = "I am learning";
     sentence += " a lot from this book!"; //Assigning variable "sentence" to string value, and concatenating the string
    document.getElementById("Concatenate").innerHTML = sentence; //The element with the ID will display the concatenated string
}

function secondFunction() {
    var number = 35;
    document.getElementById("Number").innerHTML = number;
}