var mouseevent = "";
var last_position_of_x, last_position_of_y;
var canvas = document.getElementById("canva");
var ctx = canvas.getContext("2d");
var color = "black";
var width = 2;

canvas.addEventListener("mousedown", mouse_is_down);

function mouse_is_down(e) {
    color = document.getElementById("col_inp").value;
    width = document.getElementById("width").value;
    mouseevent = "mousedown";
}
canvas.addEventListener("mouseup", mouse_is_up);

function mouse_is_up(e) {
    mouseevent = "mouseup";
}
canvas.addEventListener("mousemove", mouse_is_moving);

function mouse_is_moving(e) {
    var current_x = e.clientX - canvas.offsetLeft;
    var current_y = e.clientY - canvas.offsetTop;
    console.log(current_x, current_y);
    if (mouseevent == "mousedown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width;
        ctx.moveTo(last_position_of_x, last_position_of_y);
        ctx.lineTo(current_x, current_y);
        ctx.stroke();
    }
    last_position_of_x = current_x;
    last_position_of_y = current_y;
}

canvas.addEventListener("mouseleave", mouse_is_leaving);

function mouse_is_leaving(e) {
    mouseevent = "mouseleave";
}

function clear_canva() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    color = "black";
}