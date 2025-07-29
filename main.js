const canvas = document.getElementById('spiralCanvas');
const ctx = canvas.getContext('2d');
canvas.width = 600;
canvas.height = 600;

let angle = 0;
let pulse = 0;

function drawSpiral() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.strokeStyle = `rgba(173, 216, 230, ${0.7 + Math.sin(pulse) * 0.2})`;
  ctx.lineWidth = 1;
  ctx.beginPath();
  for (let i = 0; i < 300; i++) {
    let radius = i * 1.2 + Math.sin(pulse * 2) * 10;
    let x = canvas.width / 2 + radius * Math.cos(i * 0.1 + angle);
    let y = canvas.height / 2 + radius * Math.sin(i * 0.1 + angle);
    ctx.lineTo(x, y);
  }
  ctx.stroke();
  angle += 0.005;
  pulse += 0.02;
  requestAnimationFrame(drawSpiral);
}
drawSpiral();

// Voice recognition
const chatBox = document.getElementById('chat-box');
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
if (SpeechRecognition) {
  const recognizer = new SpeechRecognition();
  recognizer.continuous = true;
  recognizer.interimResults = false;
  recognizer.onresult = (event) => {
    const transcript = event.results[event.results.length - 1][0].transcript;
    const msg = document.createElement('div');
    msg.textContent = 'You (voice): ' + transcript;
    chatBox.appendChild(msg);
    chatBox.scrollTop = chatBox.scrollHeight;
    pulse += 1;
  };
  recognizer.start();
} else {
  chatBox.innerHTML += '<div>Voice recognition not supported in this browser.</div>';
}

function sendMessage() {
  const input = document.getElementById('user-input');
  if (input.value.trim() === '') return;
  const msg = document.createElement('div');
  msg.textContent = 'You: ' + input.value;
  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
  input.value = '';
  pulse += 1;
}