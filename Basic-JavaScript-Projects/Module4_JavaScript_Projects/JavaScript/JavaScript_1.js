var c = document.getElementById("myCanvas");


var ctx0 = c.getContext("2d");
ctx0.moveTo(200, 0);
ctx0.lineTo(0, 100);
ctx0.stroke();


//var c = document.getElementById("rectCanvasW");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(95, 50, 40, 0, 2 * Math.PI);
ctx.fillStyle = "red";
//ctx.fillRect(20, 20, 150, 100);
ctx.fill();
ctx.stroke();

var ctx1 = c.getContext("2d");
ctx1.moveTo(0, 0);
ctx1.lineTo(200, 100);
ctx1.stroke();

function rectCanvasWide() {
    //alert("Function called");
    var c = document.getElementById("rectCanvasW");
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.arc(95, 50, 40, 0, 2 * Math.PI);
    
    ctx.fillStyle = "blue";
    //ctx.fillRect(20, 20, 150, 100);
    ctx.fill();
    ctx.stroke();
}

/*
function rectCanvasTall() {
    //alert("Function called");
    var c = document.getElementById("rectCanvasT");
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.arc(100, 100, 90, 0, 2 * Math.PI);

    // Create horizontal gradient
    const my_gradient = ctx.createLinearGradient(0, 0, 170, 0);
    my_gradient.addColorStop(0, "black");
    my_gradient.addColorStop(0.25, "red");
    my_gradient.addColorStop(1, "white");

    ctx.fillStyle = my_gradient;

    ctx.fill();
    
    ctx.stroke();
}

function rectCanvasTall() {
    //alert("Function called");
    var c = document.getElementById("rectCanvasT");
    var ctx = c.getContext("2d");
    
    // --- FIRST CIRCLE (Horizontal Gradient) ---
    ctx.beginPath();
    ctx.arc(100, 100, 90, 0, 2 * Math.PI);

    const my_gradient = ctx.createLinearGradient(0, 0, 170, 0);
    my_gradient.addColorStop(0, "black");
    my_gradient.addColorStop(0.25, "red");
    my_gradient.addColorStop(1, "white");

    ctx.fillStyle = my_gradient;
    ctx.fill();
    ctx.stroke();

    // --- SECOND CIRCLE (Vertical Gradient) ---
    ctx.beginPath();
    // Centered at Y = 300 to sit below the first circle
    ctx.arc(100, 300, 90, 0, 2 * Math.PI); 

    // Vertical gradient flowing from Y = 210 (top of 2nd circle) to Y = 390 (bottom of 2nd circle)
    const vertical_gradient = ctx.createLinearGradient(0, 210, 0, 390);
    vertical_gradient.addColorStop(0, "black");
    vertical_gradient.addColorStop(0.25, "red");
    vertical_gradient.addColorStop(1, "white");

    ctx.fillStyle = vertical_gradient;
    ctx.fill();
    ctx.stroke();
}

*/

function rectCanvasTall() {
    //alert("Function called");
    var c = document.getElementById("rectCanvasT");
    var ctx = c.getContext("2d");
    
     // --- FIRST CIRCLE (Horizontal Gradient - Enhanced Black) ---
    ctx.beginPath();
    ctx.arc(100, 100, 90, 0, 2 * Math.PI);

    const my_gradient = ctx.createLinearGradient(0, 0, 170, 0);
    my_gradient.addColorStop(0, "black");
    my_gradient.addColorStop(0.15, "black"); // Keeps a solid black region before blending
    my_gradient.addColorStop(0.4, "red");     // Shifted slightly right to give black room
    my_gradient.addColorStop(1, "white");

    ctx.fillStyle = my_gradient;
    ctx.fill();
    ctx.stroke();

    // --- SECOND CIRCLE (Vertical Gradient - Balanced & Distinct) ---
    ctx.beginPath();
    ctx.arc(100, 300, 90, 0, 2 * Math.PI); 

    // Tightened Y-coordinates (230 to 370) to make the transitions sharper
    const vertical_gradient = ctx.createLinearGradient(0, 230, 0, 370);
    vertical_gradient.addColorStop(0, "black");
    vertical_gradient.addColorStop(0.5, "red");    // Moved to 0.5 to balance red and give white more space
    vertical_gradient.addColorStop(1, "white");

    ctx.fillStyle = vertical_gradient;
    ctx.fill();
    ctx.stroke();


    // --- THIRD CIRCLE (Diagonal Gradient) ---
    ctx.beginPath();
    // Centered at Y = 500 to sit below the second circle
    ctx.arc(100, 500, 90, 0, 2 * Math.PI); 

    // Tightened coordinates bring the colors closer together for a distinct transition
    const diagonal_gradient = ctx.createLinearGradient(40, 440, 150, 550);
    diagonal_gradient.addColorStop(0, "black");
    diagonal_gradient.addColorStop(0.25, "red");
    diagonal_gradient.addColorStop(1, "white");

    ctx.fillStyle = diagonal_gradient;
    ctx.fill();
    ctx.stroke();
}
