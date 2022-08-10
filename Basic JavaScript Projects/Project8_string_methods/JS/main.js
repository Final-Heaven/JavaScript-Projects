function full_Sentence() { //Concatenates strings together to make full sentence
    var part_1 = "This sentence ";
    var part_2 = "is no longer ";
    var part_3 = "split apart. ";
    var part_4 = "It is now together.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("sentence").innerHTML = whole_sentence;
}

function slice_sentence() { //Displays only a section of the string
    var sentence = "The quick brown fox jumps over the lazy dog.";
    var section = sentence.slice(4,10);
    document.getElementById("slice").innerHTML = section;
}

function upper_case() { //Converts all letters to uppercase
    var sentence = "I went to the store to buy groceries.";
    var upper = sentence.toUpperCase();
    document.getElementById("UpperCase").innerHTML = upper;
}

function search_method() { //Returns the position of the first match of what you searched for
    var sentence = "The sky is blue. The ocean is also blue.";
    var search = sentence.search("blue");
    document.getElementById("search").innerHTML = search;
}

function number_to_string() { //Converts data type number to string
    var number = 567;
    document.getElementById("string").innerHTML = number.toString();
}

function precision_method() { //Displays number with specified amount of places
    var precise = 154835.2125788459;
    document.getElementById("precision").innerHTML = precise.toPrecision(8);
}

function fixed_method() { //Displays rounded number with specified number of decimal places
    var number = 458.5569482;
    document.getElementById("fixed").innerHTML = number.toFixed(3);
}

function value_method() { //Default setting - returns value of string
    var value = "Hello!";
    document.getElementById("value").innerHTML = value.valueOf();
}