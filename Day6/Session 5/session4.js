// Back to Home
const homeBtn = document.getElementById("homeBtn");
if (homeBtn) {
  homeBtn.addEventListener("click", () => {
    window.location.href = "index.html";
  });
}

// Restart Course → Session 1
const restartBtn = document.getElementById("restartBtn");
if (restartBtn) {
  restartBtn.addEventListener("click", () => {
    window.location.href = "session1.html";
  });
}

// Progress
const progressFill = document.getElementById("progressFill");
const progressText = document.getElementById("progressText");

let progressValue = 100; // Session 5 completed
if (progressFill && progressText) {
  progressFill.style.width = progressValue + "%";
  progressText.textContent = progressValue + "% Completed";
}
