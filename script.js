// Typewriter Effect
const taglines = ["Frontend Developer", "UI/UX Designer", "Creative Coder"];
let i = 0, j = 0;
const taglineEl = document.querySelector(".tagline");

function type() {
  if (j < taglines[i].length) {
    taglineEl.textContent += taglines[i][j];
    j++;
    setTimeout(type, 100);
  } else {
    setTimeout(erase, 1500);
  }
}

function erase() {
  if (j > 0) {
    taglineEl.textContent = taglines[i].substring(0, j - 1);
    j--;
    setTimeout(erase, 50);
  } else {
    i = (i + 1) % taglines.length;
    setTimeout(type, 500);
  }
}

document.addEventListener("DOMContentLoaded", type);

// Scroll Reveal
function reveal() {
  const reveals = document.querySelectorAll(".reveal");
  reveals.forEach(r => {
    const windowHeight = window.innerHeight;
    const revealTop = r.getBoundingClientRect().top;
    if (revealTop < windowHeight - 100) r.classList.add("active");
  });
}
window.addEventListener("scroll", reveal);
reveal();
