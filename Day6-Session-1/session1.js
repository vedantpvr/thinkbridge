
const backBtn = document.getElementById("backBtn");
if (backBtn) {
  backBtn.addEventListener("click", () => {
    window.location.href = "index.html";
  });
}


const progressFill = document.getElementById("progressFill");
const progressText = document.getElementById("progressText");


let progressValue = 20; 

if (progressFill && progressText) {
  progressFill.style.width = progressValue + "%";
  progressText.textContent = progressValue + "% Completed";
}
