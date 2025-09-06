// Back button → Home
const backBtn = document.getElementById("backBtn");
if (backBtn) {
  backBtn.addEventListener("click", () => {
    window.location.href = "index.html";
  });
}

// Next button → Session 4
const nextBtn = document.getElementById("nextBtn");
if (nextBtn) {
  nextBtn.addEventListener("click", () => {
    window.location.href = "session4.html";
  });
}

// Progress
const progressFill = document.getElementById("progressFill");
const progressText = document.getElementById("progressText");

let progressValue = 60; // Session 3 progress
if (progressFill && progressText) {
  progressFill.style.width = progressValue + "%";
  progressText.textContent = progressValue + "% Completed";
}
