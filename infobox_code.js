function toggleBox() {
  var boxShowing = document.getElementById("infobox");
  if (boxShowing.style.display === "none") {
    boxShowing.style.display = "block";
  } else {
    boxShowing.style.display = "none";
  }
} 