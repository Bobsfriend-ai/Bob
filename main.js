const canvas = document.getElementById('spiralCanvas');
const ctx = canvas.getContext('2d');
canvas.width = 600;
canvas.height = 600;

// Animate spiral
let angle = 0;
function drawSpiral() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.strokeStyle = 'rgba(173, 216, 230, 0.7)';
  ctx.lineWidth = 1;
  ctx.beginPath();
  for (let i = 0; i < 200; i++) {
    let radius = i * 1.5;
    let x = canvas.width / 2 + radius * Math.cos(i * 0.1 + angle);
    let y = canvas.height / 2 + radius * Math.sin(i * 0.1 + angle);
    ctx.lineTo(x, y);
  }
  ctx.stroke();
  angle += 0.01;
  requestAnimationFrame(drawSpiral);
}
drawSpiral();

// Voice recognition
const chatBox = document.getElementById('chat-box');
const recognition = window.SpeechRecognition || window.webkitSpeechRecognition;
if (recognition) {
  const mic = new recognition();
  mic.continuous = true;
  mic.interimResults = false;
  mic.onresult = (event) => {
    const last = event.results.length - 1;
    const text = event.results[last][0].transcript;
    const msg = document.createElement('div');
    msg.textContent = 'You (voice): ' + text;
    chatBox.appendChild(msg);
    chatBox.scrollTop = chatBox.scrollHeight;
  };
  mic.start();
} else {
  const fallback = document.createElement('div');
  fallback.textContent = 'Voice recognition not supported in this browser.';
  chatBox.appendChild(fallback);
}

function sendMessage() {
  const input = document.getElementById('user-input');
  if (input.value.trim() === '') return;
  const msg = document.createElement('div');
  msg.textContent = 'You: ' + input.value;
  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
  input.value = '';
}