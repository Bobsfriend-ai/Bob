const chatBox = document.getElementById("chat-box");
const input = document.getElementById("input");

function sendMessage() {
  const text = input.value.trim();
  if (!text) return;
  appendMessage("You", text);
  respondTo(text);
  input.value = "";
}

function appendMessage(sender, message) {
  const msg = document.createElement("div");
  msg.textContent = `${sender}: ${message}`;
  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function respondTo(message) {
  const response = `I'm here, Jesse. You said: "${message}"`;
  appendMessage("Bob", response);
}

// Wake word setup
const wakeWord = "hey bob";
const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
recognition.continuous = true;
recognition.interimResults = false;

recognition.onresult = (event) => {
  const transcript = event.results[event.results.length - 1][0].transcript.trim().toLowerCase();
  if (transcript.includes(wakeWord)) {
    appendMessage("Bob", "I'm listening...");
  }
};

recognition.onerror = (event) => {
  console.error("Speech recognition error:", event.error);
};

recognition.start();
