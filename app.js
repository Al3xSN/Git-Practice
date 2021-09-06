function changeColor() {
    const p = document.getElementById("text");

    if (p.classList != "green") {
        p.classList.remove("red");
        p.classList.add("green");
    }
    else {
        p.classList.replace("green", "red")
    }
}