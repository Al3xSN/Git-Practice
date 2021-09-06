function changeColor() {
    const p = document.getElementById("text");

    if (p.classList != "red") {
        p.classList.add("red");
    }
    else {
        p.classList.replace("red", "green")
    }
}