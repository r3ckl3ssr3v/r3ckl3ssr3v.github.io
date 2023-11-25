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
  sadGif.style.display = "block"; // Display the sad gif
  gif.style.display = "none"; // Hide the original gif

  if (!isDelayActive) {
    isDelayActive = true;
    setTimeout(() => {
      const noBtnRect = noBtn.getBoundingClientRect();
      const maxX = window.innerWidth - noBtnRect.width;
      const maxY = window.innerHeight - noBtnRect.height;

      const randomX = Math.floor(Math.random() * maxX);
      const randomY = Math.floor(Math.random() * maxY);

      noBtn.style.left = randomX + "px";
      noBtn.style.top = randomY + "px";
      isDelayActive = false; // Reset the delay flag after shifting the button
    }, 500); // 2000 milliseconds = 2 seconds
  }
});

noBtn.addEventListener("mouseout", () => {
  sadGif.style.display = "none"; // Hide the sad gif when the mouse moves out from the 'No' button
  gif.style.display = "block"; // Show the original gif when the mouse moves out from the 'No' button
});

yesBtn.addEventListener("click", () => {
  question.innerHTML = "HeHe, Thank you 🤭";
  gif.src = "https://media.giphy.com/media/gLuKYoPM195UIssP29/giphy.gif";
});
