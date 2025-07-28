
const canvas = document.getElementById("spiral");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let angle = 0;
let centerX = canvas.width / 2;
let centerY = canvas.height / 2;

function drawSpiral() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.save();
  ctx.translate(centerX, centerY);
  ctx.rotate(angle);
  ctx.beginPath();
  for (let i = 0; i < 500; i++) {
    const radius = i * 0.1;
    const x = radius * Math.cos(i * 0.1);
    const y = radius * Math.sin(i * 0.1);
    ctx.lineTo(x, y);
  }
  ctx.strokeStyle = "rgba(138, 43, 226, 0.8)";
  ctx.shadowColor = "#fff";
  ctx.shadowBlur = 15;
  ctx.lineWidth = 1.5;
  ctx.stroke();
  ctx.restore();
  angle += 0.002;
  requestAnimationFrame(drawSpiral);
}

drawSpiral();

document.getElementById("send-button").addEventListener("click", () => {
  const input = document.getElementById("chat-input");
  const message = input.value.trim();
  if (message) {
    addMessage("You", message);
    input.value = "";
    setTimeout(() => {
      addMessage("Bob", `I'm still learning, but I hear you: "${message}"`);
    }, 500);
  }
});

function addMessage(sender, text) {
  const log = document.getElementById("chat-log");
  const msg = document.createElement("div");
  msg.textContent = sender + ": " + text;
  log.appendChild(msg);
  log.scrollTop = log.scrollHeight;
}
