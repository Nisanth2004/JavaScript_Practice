function changeColor() {
    var currentDate = new Date();
    var hour = currentDate.getHours();
    var minute = currentDate.getMinutes();
    var second = currentDate.getSeconds();
    var fullDate = currentDate.toLocaleTimeString();
    
    var x = document.getElementById("para");
    x.innerHTML = fullDate;

    if (second % 2 === 0) {
        x.style.color = "red";
    } else {
        x.style.color = "green";
    }
}

function start() {
    clear = setInterval(changeColor, 1000);
}

function stop() {
    clearInterval(clear);
}
