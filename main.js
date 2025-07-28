function sendMessage() {
    const input = document.getElementById('user-input');
    const message = input.value.trim();
    if (!message) return;

    const chatBox = document.getElementById('chat-box');
    const userMessage = document.createElement('div');
    userMessage.textContent = message;
    userMessage.style.textAlign = 'right';
    chatBox.appendChild(userMessage);

    const botMessage = document.createElement('div');
    botMessage.textContent = `I'm here, Jesse. You said: "${message}"`;
    botMessage.style.textAlign = 'left';
    chatBox.appendChild(botMessage);

    input.value = '';
}