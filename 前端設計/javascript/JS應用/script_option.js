const dropdown = document.querySelector("#dropdown");

dropdown.addEventListener("change", select);
function select() {
    var x = dropdown.value;
    if (x == "none") {
        
        
    }
    else {
        document.getElementById("show").innerHTML = "你選擇" + x;
        document.getElementById("image").src = x + ".jpg"
    }
}



