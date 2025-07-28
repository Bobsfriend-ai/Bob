
document.getElementById('send-btn').addEventListener('click', () => {
  const input = document.getElementById('user-input');
  const message = input.value.trim();
  if (message) {
    const messagesDiv = document.getElementById('messages');
    const userMsg = document.createElement('div');
    userMsg.textContent = "You: " + message;
    messagesDiv.appendChild(userMsg);

    const bobReply = document.createElement('div');
    bobReply.textContent = "Bob: I'm thinking about that...";
    messagesDiv.appendChild(bobReply);

    input.value = "";
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
  }
});
