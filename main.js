
document.getElementById("send-button").addEventListener("click", () => {
  const input = document.getElementById("chat-input");
  const message = input.value.trim();
  if (message) {
    addMessage("You", message);
    input.value = "";
    setTimeout(() => {
      addMessage("Bob", generateResponse(message));
    }, 500);
  }
});

function addMessage(sender, text) {
  const log = document.getElementById("chat-log");
  const msg = document.createElement("div");
  msg.textContent = sender + ": " + text;
  log.appendChild(msg);
  log.scrollTop = log.scrollHeight;
}

function generateResponse(input) {
  return "I'm still learning, but I hear you: "" + input + """;
}
