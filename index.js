const hImgCont = document.querySelector("#H-Img-Cont");
const cont = document.querySelector("#container");

let isHeld = false;
let startX, initialLeft;

cont.addEventListener("mousedown", (e) => {
    isHeld = true;
    startX = e.clientX;
    initialLeft = hImgCont.getBoundingClientRect().left - cont.getBoundingClientRect().left;
    cont.style.cursor = "grabbing";
    hImgCont.style.pointerEvents = "auto";  
});

cont.addEventListener("mousemove", (e) => {
    if (!isHeld) return;
    e.preventDefault();
    const deltaX = e.clientX - startX;
    hImgCont.style.transform = `translateX(${deltaX}px)`;
});

window.addEventListener("mouseup", () => {
    if (!isHeld) return;
    isHeld = false;
    cont.style.cursor = "default"; 
    hImgCont.style.pointerEvents = "none";  
    const deltaX = event.clientX - startX;
    hImgCont.style.left = `${initialLeft + deltaX}px`;  
    hImgCont.style.transform = '';
});