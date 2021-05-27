canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");
var mouseEvent="empty";
var last_position_of_x, last_position_of_y;
width_of_line=1;
color="blue";
canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e) {
mouseEvent="mouseleave";
}
canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e) {
mouseEvent="mouseUP";
}
canvas.addEventListener("mouseDown", my_mouseDown);
function my_mouseDown(e) {
mouseEvent="mouseDOWN";
}
canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e) {
current_position_of_mouse_x=e.clientX-canvas.offsetLeft;
current_position_of_mouse_y=e.clientY-canvas.offsetTop;
if (mouseEvent == "mouseDown") {
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=width_of_line;
console.log("Last position of x and y coordinates = ");
console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
ctx.moveTo(last_position_of_x, last_position_of_y);

console.log("Current position of x and y coordinates = ");
console.log("x = " + current_position_of_x + "y = " + current_position_of_y);
ctx.lineTo(current_position_of_x, current_position_of_y);
ctx.stroke();
}

last_position_of_x = current_position_of_mouse_x;
last_position_of_y = current_position_of_mouse_y;
}