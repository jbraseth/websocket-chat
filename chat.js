document.addEventListener("DOMContentLoaded", function () {
  const textarea = document.querySelector("textarea");

  // Adjust textarea height and handle overflow
  textarea.addEventListener("input", function () {
    this.style.height = "auto";
    this.style.height = this.scrollHeight + "px";

    // Toggle vertical scrollbar based on content height
    if (this.scrollHeight > 80) {
      this.style.overflowY = "scroll";
    } else {
      this.style.overflowY = "hidden";
    }
  });

  const sendButton = document.querySelector("button");

  // Disable the send button initially
  sendButton.disabled = true;

  // Enable or disable send button based on textarea content
  textarea.addEventListener("input", function () {
    sendButton.disabled = !this.value.trim();
  });
});
