const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const range = document.querySelector("#range");
const color = document.querySelector("#color");
const colorOptions = Array.from(document.querySelectorAll(".color-option"));
const modeBtn = document.querySelector("#mode-btn");
const destroyBtn = document.querySelector("#destory-btn");
const eraserBtn = document.querySelector("#eraser-btn");
const picture = document.querySelector("#picture");
const write = document.querySelector("#write");
const saveBtn = document.querySelector("#save");

const canvas_WIDTH = 500;
const canvas_HEIGHT = 500;

canvas.width = canvas_WIDTH;
canvas.height = canvas_HEIGHT;
ctx.lineWidth = range.value;
ctx.lineCap = "round";

let isPainting = false;
let isFilling = false;


function onMove(event) {
    if(isPainting === true) {
        ctx.lineTo(event.offsetX,event.offsetY);
        ctx.stroke();
        return;
    } else {
        ctx.beginPath();
        ctx.moveTo(event.offsetX,event.offsetY);
    }
}

function onMousedown() {
    isPainting = true;
}

function onMouseup() {
    isPainting = false
}

function onChangeWidth(event) {
    ctx.lineWidth = event.target.value;
}

function onChangeColor(event) {
   ctx.strokeStyle = event.target.value;
   ctx.fillStyle = event.target.value;
}

function onClickColor(event) {
    ctx.strokeStyle = event.target.dataset.color;
    ctx.fillStyle = event.target.dataset.color;
    color.value = event.target.dataset.color;
}

function onModeClick() {
    if(isFilling) {
        isFilling = false
        modeBtn.innerText = "Fill"
    } else {
        isFilling = true
        modeBtn.innerText = "Draw"

    }
}

function onCanvasClick() {
    if(isFilling) {
        ctx.fillRect(0,0, canvas_WIDTH, canvas_HEIGHT)
    }
}

function onDestroyBtn() {  
    ctx.fillStyle = "white";
    ctx.fillRect(0,0,canvas_WIDTH,canvas_HEIGHT)
}

function onEraserBtn() {
    ctx.strokeStyle = "white"
    isFilling = false;
    modeBtn.innerText = "Fill"
}

function imageCall() {
    ctx.drawImage(image,)
}

function onPicture(event) {
    const file = event.target.files[0];
    const url = URL.createObjectURL(file);
    const image = new Image();
    image.src = url;
    image.onload = function() {
        ctx.drawImage(image, 0, 0,canvas_WIDTH, canvas_HEIGHT );
    };
    picture.value = null;
}

function onDoubleClick(event) {
    const text = write.value;
    if(text !== "") {
    ctx.save()
    ctx.lineWidth = 1;
    ctx.fillText(text,event.offsetX,event.offsetY);
    ctx.restore()
    }
}

function onSaveClick() {
    const url = canvas.toDataURL();
    const a = document.createElement("a");
    a.href = url
    a.download = "myDrwing.png"
}

canvas.addEventListener("mousemove", onMove)
canvas.addEventListener("mousedown", onMousedown)
document.addEventListener("mouseup", onMouseup)
canvas.addEventListener("mouseleave", onMouseup)
canvas.addEventListener("click", onCanvasClick)
range.addEventListener("change", onChangeWidth)
color.addEventListener("change", onChangeColor)

colorOptions.forEach((color) => color.addEventListener("click", onClickColor))

modeBtn.addEventListener("click", onModeClick)

destroyBtn.addEventListener("click", onDestroyBtn)

eraserBtn.addEventListener("click", onEraserBtn);
picture.addEventListener("change", onPicture)

canvas.addEventListener("dblclick", onDoubleClick);

save.addEventListener("click", onSaveClick);