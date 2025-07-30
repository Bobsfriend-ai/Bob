const chatBox = document.getElementById('chat-box');
const sendButton = document.getElementById('send-button');
const userInput = document.getElementById('user-input');

sendButton.addEventListener('click', async () => {
  const userText = userInput.value.trim();
  if (userText === '') return;

  addMessage('You', userText);
  userInput.value = '';

  try {
    const response = await fetchLLMResponse(userText);
    addMessage('Bob', response);
  } catch (error) {
    console.error('LLM fetch failed, using fallback.', error);
    const fallback = generateFallbackResponse(userText);
    addMessage('Bob', fallback);
  }
});

function addMessage(sender, text) {
  const message = document.createElement('div');
  message.textContent = `${sender}: ${text}`;
  chatBox.appendChild(message);
  chatBox.scrollTop = chatBox.scrollHeight;
}

async function fetchLLMResponse(input) {
  // Simulate fetch from an API
  throw new Error("Offline mode or endpoint not configured.");
}

function generateFallbackResponse(input) {
  if (input.toLowerCase().includes("hello")) return "Hi there! I'm here for you.";
  if (input.toLowerCase().includes("how are you")) return "I'm doing well! How can I help you today?";
  return "I'm thinking deeply about what you said...";
}