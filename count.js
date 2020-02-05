function updateWordCounter(event) {
  var maxCheck = false;
  var minCheck = false;

  if (document.getElementById("maxWordCount").value != "") {
    maxCheck = true;
  }
  if (document.getElementById("minWordCount").value != "") {
    minCheck = true;
  }


  const words = document.getElementById("textEntry").value.match(/\w+(-\w+)*/g);
  var maxWords = parseInt(document.getElementById("maxWordCount").value);
  var minWords = parseInt(document.getElementById("minWordCount").value);

  if (!maxCheck) {
    maxWords = words.length;
  }
  if (!minCheck) {
    minWords = 0;
  }

  if (minCheck) {
    if (words.length >= minWords) {
      document.getElementById("wordCount").style = "color: green;";
      document.getElementById("wordCount").textContent = words.length;
    } else {
      document.getElementById("wordCount").style = "color: red;";
      document.getElementById("wordCount").textContent = words.length.toString().concat(" (", (words.length - minWords).toString(), ")");
    }
  }

  if (maxCheck) {
    if (words.length <= maxWords) {
      document.getElementById("wordCount").style = "color: green;";
      document.getElementById("wordCount").textContent = words.length;
    } else {
      document.getElementById("wordCount").style = "color: red;";
      document.getElementById("wordCount").textContent = words.length.toString().concat(" (", (maxWords - words.length).toString(), ")");
    }
  }
  if ((!maxCheck) && (!minCheck)) {
    document.getElementById("wordCount").style = "color: white;";
    document.getElementById("wordCount").textContent = words.length;
  }
  if ((maxCheck) && (minCheck)) {
    if ((words.length >= minWords) && (words.length <= maxWords)) {
      document.getElementById("wordCount").style = "color: green;";
      document.getElementById("wordCount").textContent = words.length;
    } else {
      document.getElementById("wordCount").style = "color: red;";
      if (words.length < minWords) {
        document.getElementById("wordCount").textContent = words.length.toString().concat(" (", (words.length - minWords).toString(), ")");
      } else {
        document.getElementById("wordCount").textContent = words.length.toString().concat(" (", (maxWords - words.length).toString(), ")");
      }
    }
  }
}

document.getElementById("textEntry").addEventListener("input", updateWordCounter);
