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

    if ((words.length <= maxWords) && (check)) {
        document.getElementById("wordCount").style = "color: green;";
        document.getElementById("wordCount").textContent = words.length;
    } else {
        if (check) {
            document.getElementById("wordCount").style = "color: red;";
            document.getElementById("wordCount").textContent = words.length.toString().concat(" (", (maxWords - words.length).toString(), ")");
        } else {
            document.getElementById("wordCount").textContent = words.length;
        }
    }
}

document.getElementById("textEntry").addEventListener("input", updateWordCounter);