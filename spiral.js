
const canvas = document.getElementById('spiral-canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let angle = 0;

function drawSpiral() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = 'rgba(150,150,255,0.7)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    for (let i = 0; i < 1000; i++) {
        const x = canvas.width / 2 + Math.cos(i / 10 + angle) * i / 2;
        const y = canvas.height / 2 + Math.sin(i / 10 + angle) * i / 2;
        ctx.lineTo(x, y);
    }
    ctx.stroke();
    angle += 0.01;
    requestAnimationFrame(drawSpiral);
}
drawSpiral();
