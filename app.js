function changeColor() {
    const p = document.getElementById("text");

    if (p.style.color != "green") {
        p.style.color = "green";
    }
    else {
        p.style.color = "red";
    }
}