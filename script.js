const userInput = document.querySelector(".key");
const keyCode = document.querySelector(".key-code");
const container = document.querySelector(".key-header");
const header = document.createElement("p");
container.insertBefore(header,userInput);
header.classList.add("header-description")

window.addEventListener("keydown", (event)=>{
    header.textContent = `You selected:  ${event.key}`;
    keyCode.textContent = (event.keyCode);
})

