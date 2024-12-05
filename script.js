const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");

document.querySelector(".matrix").appendChild(canvas);
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const fontSize = 16;
const columns = canvas.width / fontSize;
const drops = Array(Math.floor(columns)).fill(0);

function drawMatrix() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#00ff00";
    ctx.font = `${fontSize}px monospace`;

    drops.forEach((y, x) => {
        const text = Math.random() > 0.5 ? "0" : "1";
        ctx.fillText(text, x * fontSize, y * fontSize);

        if (y * fontSize > canvas.height && Math.random() > 0.975) {
            drops[x] = 0;
        } else {
            drops[x]++;
        }
    });

    requestAnimationFrame(drawMatrix);
}

drawMatrix();
