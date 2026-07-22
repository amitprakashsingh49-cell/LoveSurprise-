const emojis = ["🩷","🫀","🌸","🌹"];

setInterval(() => {

let e = document.createElement("div");

e.className = "emoji";

e.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];

e.style.left = Math.random() * 100 + "vw";

e.style.animationDuration = (3 + Math.random() * 3) + "s";

document.body.appendChild(e);

setTimeout(() => {
e.remove();
}, 6000);

}, 250);