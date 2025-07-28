function sendMessage() {
  const input = document.getElementById("user-input");
  const chatBox = document.getElementById("chat-box");
  if (input.value.trim() === "") return;
  const msg = document.createElement("div");
  msg.textContent = "You: " + input.value;
  chatBox.appendChild(msg);
  input.value = "";
}