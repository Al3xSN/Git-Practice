function changeColor() {
    const p = document.getElementById("text");

    if (!p.classList.contains("green")) {
        p.classList.remove("red");
        p.classList.add("green");
    }
    else {
        p.classList.replace("green", "red")
    }
}