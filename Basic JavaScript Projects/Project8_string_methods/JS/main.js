function full_Sentence() {
    var part_1 = "This sentence ";
    var part_2 = "is no longer ";
    var part_3 = "split apart. ";
    var part_4 = "It is now together.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("sentence").innerHTML = whole_sentence;
}