document.addEventListener("DOMContentLoaded", function () {
  // Custom Scrollbar Initialization
  if (typeof OverlayScrollbars !== 'undefined') {
    OverlayScrollbars(document.querySelectorAll('.custom-scrollbar'), {
        resize: "none",
        scrollbars: {
            autoHide: 'leave',
            autoHideDelay: 200
        },
        overflowBehavior: {
            x: "visible-hidden",
            y: "scroll"
        }
    });

    OverlayScrollbars(document.querySelectorAll('.custom-scrollbar-y'), {
        resize: "none",
        scrollbars: {
            autoHide: 'leave',
            autoHideDelay: 200
        },
        overflowBehavior: {
            x: "scroll",
            y: "scroll"
        }
    });
  }
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
});
