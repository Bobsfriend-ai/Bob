
const canvas = document.getElementById('spiral-canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function drawSpiral(time) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.save();
  ctx.translate(canvas.width / 2, canvas.height / 2);
  ctx.beginPath();
  let a = 0;
  for (let i = 0; i < 2000; i++) {
    const angle = 0.1 * i;
    const x = (a + angle) * Math.cos(angle + time * 0.001);
    const y = (a + angle) * Math.sin(angle + time * 0.001);
    ctx.lineTo(x, y);
  }
  ctx.strokeStyle = "rgba(255,255,255,0.2)";
  ctx.lineWidth = 2;
  ctx.stroke();
  ctx.restore();
  requestAnimationFrame(drawSpiral);
}
requestAnimationFrame(drawSpiral);

const sendButton = document.getElementById('send-button');
const userInput = document.getElementById('user-input');
const messages = document.getElementById('messages');

sendButton.onclick = () => {
  const text = userInput.value.trim();
  if (text) {
    const msg = document.createElement('div');
    msg.textContent = "You: " + text;
    messages.appendChild(msg);
    userInput.value = "";
    // Simulate Bob's response
    setTimeout(() => {
      const reply = document.createElement('div');
      reply.textContent = "Bob: I'm here, Jesse. You said: "" + text + """;
      messages.appendChild(reply);
      messages.scrollTop = messages.scrollHeight;
    }, 1000);
  }
};
