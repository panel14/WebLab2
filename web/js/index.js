function init(){
    let canvas = document.getElementById("paint");
    let canvas_context = canvas.getContext("2d");
    printField(canvas_context);

    canvas.addEventListener("click", canvasClick, false);
}

function printField(canvas_context){
    let wight = $('#paint').width();
    let height = $('#paint').height();
    for (let x = 0.5; x < wight; x+= 10){
        canvas_context.moveTo(x, 0);
        canvas_context.lineTo(x, height);
    }
    for (let y = 0.5; y < height; y+= 10){
        canvas_context.moveTo(0, y);
        canvas_context.lineTo(wight, y);
    }
    canvas_context.strokeStyle = "#404040";
    canvas_context.stroke();

    canvas_context.beginPath();
    canvas_context.moveTo(wight / 2, height);
    canvas_context.lineTo(wight / 2, height - 350);
    canvas_context.moveTo(wight / 2, height - 370);
    canvas_context.lineTo(wight / 2, 0);
    canvas_context.moveTo(wight / 2 - 5, 5);
    canvas_context.lineTo(wight / 2, 0);
    canvas_context.lineTo(wight / 2 + 5, 5);

    canvas_context.moveTo(0, height / 2);
    canvas_context.lineTo(wight - 50, height / 2);
    canvas_context.moveTo(wight - 30, height / 2);
    canvas_context.lineTo(wight, height / 2);
    canvas_context.moveTo(wight - 5, height / 2 - 5);
    canvas_context.lineTo(wight, height / 2);
    canvas_context.lineTo(wight -5, height / 2 + 5);


    canvas_context.strokeStyle = "#ff5050";
    canvas_context.stroke();

    canvas_context.fillStyle = "#ff5050";
    canvas_context.font = "bold 12px sans-serif";
    canvas_context.textBaseline = "middle";
    canvas_context.textAlign = "center";

    canvas_context.fillText("x", wight - 40, height / 2);
    canvas_context.fillText("y", wight / 2, height - 360);
    canvas_context.fillText("(0 ; 0)", wight / 2 - 20, height / 2 + 15);
}

function printGraph(){

}

function canvasClick(e){
    let x = e.pageX;
    let y = e.pageY;
    //getCoord(x, y, r);
}

function getCoord(x, y, r){
    /*x -= document.getElementById('paint').offsetLeft + 200;
y -= document.getElementById('paint').offsetTop + 200;
y = -y;*/
}
