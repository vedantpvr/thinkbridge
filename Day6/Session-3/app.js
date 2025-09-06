// helloBtn click → show message
document.getElementById("helloBtn").addEventListener("click", () => {
  document.getElementById("helloOutput").textContent = "Hello! You Started Course 🎉";
});

// backBtn click → navigate back to Home
document.getElementById("learnMoreBtn").addEventListener("click", function () {
  window.location.href = "session1.html";
});

const progressFill = document.getElementById("progressFill");
const progressText = document.getElementById("progressText");


let progressValue = 00; 

if (progressFill && progressText) {
  progressFill.style.width = progressValue + "%";
  progressText.textContent = progressValue + "% Completed";
}