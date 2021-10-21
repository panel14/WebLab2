let st_canv;
let wight;
let height;
let SCALE_COEF = 0.35
let r = 0;
let isGraphCall;
let isCleanStorage

window.addEventListener('load', pageOpened, false);

function init(){
    let canvas = document.getElementById("paint");
    st_canv = canvas.getContext("2d");
    wight = $('#paint').width();
    height = $('#paint').height();
    printField(st_canv, wight, height);
    printGraph(st_canv, wight, height);
    canvas.addEventListener("click", canvasClick, false);
}

function printField(canvas_context, wight, height){
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

    canvas_context.fillStyle = "#ff5050";
    canvas_context.font = "bold 12px sans-serif";
    canvas_context.textBaseline = "middle";
    canvas_context.textAlign = "center";

    canvas_context.beginPath();
    canvas_context.moveTo(wight / 2, height);                  //y-coordLine
    canvas_context.lineTo(wight / 2, height * 0.85)
    getKockaV(canvas_context, wight / 2, height * 0.85);
    canvas_context.fillText("-R", wight / 2 + 15, height * 0.85);

    canvas_context.lineTo(wight / 2, height * 0.675);
    getKockaV(canvas_context, wight / 2, height * 0.675);
    canvas_context.fillText("-R/2", wight / 2 + 20, height * 0.675);

    canvas_context.lineTo(wight / 2, height * 0.325);
    getKockaV(canvas_context, wight / 2, height * 0.325);
    canvas_context.fillText("R/2", wight / 2 + 20, height * 0.325);

    canvas_context.lineTo(wight / 2, height * 0.15);
    getKockaV(canvas_context, wight / 2, height * 0.15);
    canvas_context.fillText("R", wight / 2 + 15, height * 0.15);

    canvas_context.lineTo(wight / 2, height * 0.125);
    canvas_context.moveTo(wight / 2, height * 0.075);
    canvas_context.lineTo(wight / 2, 0);

    canvas_context.moveTo(wight / 2 - 5, 5);                //y-arrow
    canvas_context.lineTo(wight / 2, 0);
    canvas_context.lineTo(wight / 2 + 5, 5);

    canvas_context.moveTo(0, height / 2);                   //x-coordLine
    canvas_context.lineTo(wight * 0.15, height / 2);
    getKockaG(canvas_context, wight * 0.15, height / 2);
    canvas_context.fillText("-R", wight * 0.15 , height / 2 - 15);

    canvas_context.lineTo(wight * 0.325, height / 2);
    getKockaG(canvas_context, wight * 0.325, height / 2);
    canvas_context.fillText("-R/2", wight * 0.325 , height / 2 - 15);

    canvas_context.lineTo(wight * 0.675, height / 2);
    getKockaG(canvas_context, wight * 0.675, height / 2);
    canvas_context.fillText("R/2", wight * 0.675 , height / 2 - 15);

    canvas_context.lineTo(wight * 0.85, height / 2);
    getKockaG(canvas_context, wight * 0.85, height / 2);
    canvas_context.fillText("R", wight * 0.85 , height / 2 - 15);

    canvas_context.lineTo(wight * 0.875, height / 2);
    canvas_context.moveTo(wight * 0.925, height / 2);
    canvas_context.lineTo(wight, height / 2);

    canvas_context.moveTo(wight - 5, height / 2 - 5);       //x-arrow
    canvas_context.lineTo(wight, height / 2);
    canvas_context.lineTo(wight -5, height / 2 + 5);

    canvas_context.strokeStyle = "#ff5050";
    canvas_context.stroke();

    canvas_context.fillText("x", wight - 40, height / 2);
    canvas_context.fillText("y", wight / 2, height - 360);
    canvas_context.fillText("(0 ; 0)", wight / 2 - 20, height / 2 + 15);
}

function getKockaV(canvas_context, wight, height){
    canvas_context.moveTo(wight - 5, height);
    canvas_context.lineTo(wight + 5, height);
    canvas_context.moveTo(wight, height)
}

function getKockaG(canvas_context, wight, height){
    canvas_context.moveTo(wight, height - 5);
    canvas_context.lineTo(wight, height + 5);
    canvas_context.moveTo(wight, height);
}

function printGraph(canvas_context, wight, height){
    canvas_context.moveTo(wight * 0.85, height / 2);
    canvas_context.lineTo(wight / 2, height * 0.85);
    canvas_context.moveTo(wight * 0.15, height / 2);
    canvas_context.lineTo(wight * 0.15, height * 0.325);
    canvas_context.lineTo(wight / 2, height * 0.325);
    canvas_context.arc(wight / 2, height / 2, height * SCALE_COEF,
        Math.PI / 2, Math.PI, false);
    canvas_context.strokeStyle = "#ff5555";
    canvas_context.stroke();
}

function printPoint(x, y, r, answer){
    st_canv.beginPath();
    let points = convertToPrint(x, y, r)
    if (answer == "Yes")
        st_canv.fillStyle = "#04a242"
    else
        st_canv.fillStyle = "#ff5555"
    st_canv.arc(points[0] , points[1] , 3, Math.PI * 2, 0, false);
    st_canv.fill();
}

function convertToSend(x, y, r){
    x -= 200;
    x = (x * r)/(wight * SCALE_COEF);
    y = -y + 200;
    y = (y * r)/(height * SCALE_COEF);
    return [x, y]
}

function convertToPrint(x, y, r){
    x = (x * wight * SCALE_COEF)/r;
    x += 200;
    y = (y * height * SCALE_COEF)/r;
    y = -y + 200;
    return [x , y]
}

function canvasClick(e){
    let x = e.pageX;
    let y = e.pageY;
    if (!(r == 0))
        getCoord(x, y);
    else
        alert("Значение R не установлено!")
}

function getCoord(x, y){
    x -= document.getElementById('paint').offsetLeft;
    y -= document.getElementById('paint').offsetTop;
    let points = convertToSend(x, y, r)
    document.getElementById('xVal').setAttribute('value', points[0].toFixed(2));
    document.getElementById('yVal').setAttribute('value', points[1].toFixed(2));

    let data = formData(points[0], points[1], r);
    isGraphCall = true;
    sendData(data);
}

function validateForm(form){
    let fail_str = validateValue(form.xVal.value, "X", [-3, 5]);
    fail_str += validateValue(form.yVal.value, "Y", [-5, 5]);
    if (r == 0)
        fail_str += "Не выбрано значение R\n";
    if (fail_str == ""){
        let data = formData(form.xVal.value, form.yVal.value, r)
        sendData(data)
    }
    else
        alert(fail_str);
}

function validateValue(str, valueType, range){
    if (str == "")
        return "Не введено значение " + valueType + "\n";
    else if (!/^-?\d+([.]\d+)?$/.test(str))
        return "Поле " + valueType + " может содержать только цифры (разделитель - точка)\n";
    else if (parseInt(str) < range[0] || parseInt(str) > range[1])
        return "Значение " + valueType + " выходит за пределы допустимого диапазона ["+ range[0] + ";" + range[1] +"]\n";
    return "";
}

function sendData(data){
    $.ajax({
        type: "post",
        url: "post",
        data: data,
        success: function (data){
            let curData = parseData(data)
            $('table tr:last').after(`<tr>
                                        <th>${curData.xVal.toFixed(2)}</th>
                                        <th>${curData.yVal.toFixed(2)}</th>
                                        <th>${curData.rVal}</th>
                                        <th>${curData.runTime}</th>
                                        <th>${curData.currentTime}</th>
                                        <th>${curData.answer}</th>
                                      </tr>`);
            if (isGraphCall){
                printPoint(curData.xVal, curData.yVal, curData.rVal, curData.answer)
            }
        }
    });
}

function parseData(data){
    let currData = data[data.length - 1]
    localStorage.setItem("storage", JSON.stringify(data))
    return currData;
}

function pageOpened(){
    let storage = JSON.parse(localStorage.getItem("storage"));
    if (storage != null){
        for (let i = 0; i < storage.length; i++){
            $('table tr:last').after(`<tr>
                                        <th>${storage[i].xVal.toFixed(2)}</th>
                                        <th>${storage[i].yVal.toFixed(2)}</th>
                                        <th>${storage[i].rVal}</th>
                                        <th>${storage[i].runTime}</th>
                                        <th>${storage[i].currentTime}</th>
                                        <th>${storage[i].answer}</th>
                                      </tr>`)
        }
    }
}

function formData(x, y, r){
    return {"xVal" : x, "yVal": y, "rVal": r, "isCleanBean": isCleanStorage};
}

function removeStorage(){
    localStorage.removeItem("storage");
    isCleanStorage = true;
}

$('#rVal').change( function (){
    r = $(this).val();
});
