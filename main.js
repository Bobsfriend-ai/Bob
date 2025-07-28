function sendMessage() {
  const userInput = document.getElementById("user-input").value;
  if (userInput.trim()) {
    const chatBox = document.getElementById("chat-box");
    const message = document.createElement("div");
    message.textContent = "You: " + userInput;
    chatBox.appendChild(message);
    document.getElementById("user-input").value = "";
  }
}

// Placeholder animation logic
const canvas = document.getElementById("spiralCanvas");
if (canvas && canvas.getContext) {
  const ctx = canvas.getContext("2d");
  let angle = 0;
  function drawSpiral() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    for (let i = 0; i < 360; i++) {
      let theta = (i + angle) * Math.PI / 180;
      let radius = 0.5 * i;
      let x = canvas.width / 2 + radius * Math.cos(theta);
      let y = canvas.height / 2 + radius * Math.sin(theta);
      ctx.lineTo(x, y);
    }
    ctx.strokeStyle = "rgba(150,150,255,0.8)";
    ctx.stroke();
    angle += 1;
    requestAnimationFrame(drawSpiral);
  }
  drawSpiral();
}