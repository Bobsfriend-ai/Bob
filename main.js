window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.continuous = true;
recognition.interimResults = false;

recognition.onresult = (e) => {
    const transcript = Array.from(e.results)
        .map(result => result[0].transcript)
        .join('')
        .trim().toLowerCase();

    if (transcript.includes("hey bob")) {
        alert("Wake word detected: 'Hey Bob'");
        // Add response or activation logic here
    }
};

recognition.onerror = (e) => {
    console.error('Speech Recognition Error', e);
};

recognition.onend = () => {
    recognition.start(); // Keep listening
};

recognition.start();

function sendMessage() {
    const input = document.getElementById("user-input");
    const chatBox = document.getElementById("chat-box");
    const message = input.value.trim();
    if (message) {
        const messageDiv = document.createElement("div");
        messageDiv.textContent = "You: " + message;
        chatBox.appendChild(messageDiv);
        input.value = "";
    }
}