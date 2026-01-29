function changeColor() {
    const cv = document.getElementById("cv");

    if (cv.style.backgroundColor === "lightblue") {
        cv.style.backgroundColor = "white";
    } else {
        cv.style.backgroundColor = "lightblue";
    }
}

function showMessage() {
    alert("Cześć! To jest CV Jana Wardzinskiego 😎");
}
