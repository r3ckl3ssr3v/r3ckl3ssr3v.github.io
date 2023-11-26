const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
let gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

const sadGif = document.createElement("img");
sadGif.src = "https://media.giphy.com/media/AsL3dRShYSDSRArGhW/giphy.gif";
sadGif.classList.add("sad-gif");

wrapper.appendChild(sadGif);
sadGif.style.display = "none";

let isDelayActive = false; // Flag to check if delay is active

noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";

  gif.style.display = "none"; // Hide the original gif
  sadGif.style.display = "block"; // Display the sad gif

  setTimeout(() => {
    sadGif.style.display = "none"; // Hide the sad gif after 2 seconds
    gif.style.display = "block"; // Show the original gif
  }, 700); // 700 milliseconds = .7 seconds
});

yesBtn.addEventListener("click", () => {
  question.innerHTML = "HeHe, Thank you 🤭";
  gif.src = "https://media.giphy.com/media/gLuKYoPM195UIssP29/giphy.gif";
});
