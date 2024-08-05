const hImgCont = document.querySelector("#H-Img-Cont");
const cont = document.querySelector("#container");

let isHeld = false;
let cursorX;

cont.addEventListener("mousedown", (e) => {
    isHeld = true;
    cursorX = e.offsetX - hImgCont.offsetLeft;
    cont.style.cursor = "grabbing";
    hImgCont.style.pointerEvents = "auto";  
});

cont.addEventListener("mousemove", (e) => {
    if (!isHeld) return;
    e.preventDefault();
    hImgCont.style.left = `${e.offsetX - cursorX}px`;
});

window.addEventListener("mouseup", () => {
    isHeld = false;
    cont.style.cursor = "default";  
    hImgCont.style.pointerEvents = "none";  
});