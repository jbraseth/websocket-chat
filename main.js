document.addEventListener("DOMContentLoaded", function () {
  let socket = new WebSocket("ws://localhost:3000")

  const messageInput = document.querySelector("textarea[name='message-input']");
  const sendButton = document.querySelector("button[name='message-button']");

  // Disable the send button initially
  sendButton.disabled = true;

  // Enable or disable send button based on textarea content
  messageInput.addEventListener("input", function () {
    sendButton.disabled = !this.value.trim();
  });

  // Send message on Enter key press
  messageInput.addEventListener("keydown", function (event) {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      if (this.value.trim()) {
        sendMessage(this.value.trim());
      }
    }
  });

  // Send message on button click
  sendButton.addEventListener("click", function () {
    if (messageInput.value.trim()) {
      sendMessage(messageInput.value.trim());
    }
  });

  function sendMessage(message) {
    // Logic to insert message and timestamp
    const messageText = messageInput.value.trim();

    if (messageText) {
      // Create message element
      const messageDiv = document.createElement('div');
      messageDiv.classList.add('d-flex-col', 'align-items-end'); // Adjust classes as needed

      // Add primary message
      const primaryMessage = document.createElement('div');
      primaryMessage.classList.add('message', 'message-primary');
      primaryMessage.textContent = messageText;
      messageDiv.appendChild(primaryMessage);

      // Add timestamp
      const timestampDiv = document.createElement('div');
      timestampDiv.classList.add('timestamp');
      timestampDiv.textContent = getCurrentTime();
      messageDiv.appendChild(timestampDiv);

      // Append to container
      document.getElementById('message-container').appendChild(messageDiv);
    }

    // Clear the textarea and disable the button
    messageInput.value = '';
    sendButton.disabled = true;
  }

  function getCurrentTime() {
    const now = new Date();
    return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }
});