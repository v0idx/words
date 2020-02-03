function updateWordCounter(event) {
    var check = false;
    if (document.getElementById("maxWordCount").value != "") {
        check = !check;
        document.getElementById("wordCount").style = "color: white;";
    }
    const words = document.getElementById("textEntry").value.match(/\w+(-\w+)*/g);
    const maxWords = parseInt(document.getElementById("maxWordCount").value);
    if (!check) {
        maxWords == words.length;
    }
    document.getElementById("wordCount").textContent = words.length;
    if ((words.length <= maxWords) && (check)) {
        document.getElementById("wordCount").style = "color: green;";
    } else {
        if (check) {
            document.getElementById("wordCount").style = "color: red;";
        }
    }
}

document.getElementById("textEntry").addEventListener("input", updateWordCounter);