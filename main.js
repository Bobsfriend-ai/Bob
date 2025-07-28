document.getElementById("sendButton").addEventListener("click", () => {
  const input = document.getElementById("userInput").value;
  if (input.toLowerCase().includes("hey bob")) {
    alert("I'm here, Jesse. You said: " + input);
  }
});