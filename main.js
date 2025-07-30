
const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');
const sendButton = document.getElementById('send-button');
const micButton = document.getElementById('mic-button');
const transcript = document.getElementById('live-transcript');
const wakeWord = "hey bob";
let recognition;

function addMessage(text, from = "user") {
    const msg = document.createElement("div");
    msg.textContent = (from === "bob" ? "Bob: " : "You: ") + text;
    chatBox.appendChild(msg);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function respondToInput(input) {
    const response = "I'm here, and I remember you.";
    addMessage(response, "bob");
    speak(response);
    localStorage.setItem("lastInput", input);
}

function sendMessage() {
    const text = userInput.value;
    if (text.trim()) {
        addMessage(text);
        respondToInput(text);
        userInput.value = "";
    }
}

sendButton.onclick = sendMessage;

function speak(text) {
    const utterance = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(utterance);
}

function startMic() {
    if (!('webkitSpeechRecognition' in window)) return alert("Speech recognition not supported.");
    recognition = new webkitSpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = true;
    recognition.lang = "en-US";
    recognition.start();

    recognition.onresult = (event) => {
        const result = event.results[0][0].transcript.toLowerCase();
        transcript.textContent = result;
        if (result.includes(wakeWord)) {
            respondToInput("Wake word detected.");
        } else {
            addMessage(result);
            respondToInput(result);
        }
    };

    recognition.onerror = (event) => console.error(event.error);
}

micButton.onclick = startMic;
